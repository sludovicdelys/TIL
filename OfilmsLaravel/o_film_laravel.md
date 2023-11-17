## Ofilms a Laravel Project

### Database Debug

_21 Aug 2023_

⏰ Time spent problem solving : 1h 22mn

**Context of project** : 
1. movie and series project - O’clock 
2. Task : Run the project and display site index on browser
3. Route : `http://127.0.0.1:8080/movies`
4. Task : Set up a database locally 
5. Task : Run migrations to create tables in my database `laravel`

**Context of error** : 
1. I create the database with my `root` user.
2.  I create an `admin` user with a password
3. I assign this user to my database 
4. I edit the `.env` file to set up connection with my database locally

```DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=admin
DB_PASSWORD=adminpassword
```

> Illuminate\Database\QueryException SQLSTATE[HY000] [1045] Access denied for user ‘admin’@‘localhost' (using password: YES) (SQL: select * from information_schema.tables where table_schema = laravel and table_name = migrations and table_type = 'BASE TABLE') at vendor/laravel/framework/src/Illuminate/Database/Connection.php:703

？What happens when I connect to my database CLI
👉🏽 [Connecting To The Database CLI](https://laravel.com/docs/8.x/database#connecting-to-the-database-cli)

Le message d’erreur me permet de déterminer que le problème se situe au niveau de mon fichier `.env`

```
mysql: [Warning] Using a password on the command line interface can be insecure.
ERROR 1045 (28000): Access denied for user 'admin'@'localhost' (using password: YES)

   Symfony\Component\Process\Exception\ProcessFailedException 

  The command "'mysql' '--host=127.0.0.1' '--port=3306' '--user=admin' '--password=adminpassword' '--default-character-set=utf8mb4' 'laravel'" failed.
```

🔖 [Access denied for user 'admin'@'localhost' - Stackoverflow](https://stackoverflow.com/questions/43169240/php-artisan-migrate-sqlstatehy000-1045-access-denied-for-user-laravell)

Alright, it seems like I cannot access my database with those variables: `DB_USERNAME=admin` and `DB_PASSWORD=adminpassword`

Let’s change those variables and see what Laravel’s Artisan CLI tells me when I launch with : `php artisan serve --port=8080`🪄

```DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=thisismyverystrongmysqlpassword
```

✨ It works ! Okay on to the next step
When I go to my page I get a new error in the browser from the PHP DebugBar.

> SQLSTATE[42502]: Base table or view not found: 1146 Table 'laravel.movies' doesn't exist (`SQL: select * from 'movies'`).

I created my database but they aren’t any tables.
Hint : `SQL: select * from 'movies'`

### Executing Migrations

It's time to execute migrations and populate my database 🪄
According to the Laravel documentation on [running migrations](https://laravel.com/docs/8.x/migrations#running-migrations) 🤓 I can use this command : `php artisan migrate`

I don't have any errors popping up, but I don't have any data in my tables ! 🗂 

I have written a few seeders with fake data, but I wanted to create some tests. 

### Writing Factories 

I wanted to insert dummy data in the database using Laravel's Factory and Seeder. I followed the [documentation](https://laravel.com/docs/5.7/database-testing#writing-factories) and [a tutorial from medium(https://medium.com/@shanisingh03/laravel-9-fake-data-testing-using-factory-seeder-f9fece67728b). 

I wrote a model factory and used Faker PHP Library to generate a bunch of random data for testing and seeding

🔖 https://laravel.com/docs/10.x/eloquent-factories#main-content

Once my factory is defined, I can use its global `factory` function in my seed files to generate model instances of user. 

I used the PHP Artisan's Laravel Tinker in order to interact with my database on the commandline. I ran the factory below and specified its `count` record in order to generate five users. 

### Writing Seeders

Next, I generated a seeder for my testcase : `php artisan make:seed TestUserSeeder` and included the factory run inside its file. 

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->count(5)->create();
    }
}

I populate my database with mock users' data by executing the seeder : `php artisan db:seed --class=TestUserSeeder`.
I can attest that the test has worked successfuly because each of my user's password has been hashed. 

### Api BetaSeries Service Debug

>Only logged users can access the insert route for movies and series 

When I try to search a new TV show, so that I can add it to my list I find there's a litte mishap 🐞

> Undefined array key "shows"

The PHPDebug Bar tells me that the key named 'shows' doesn't exist inside my `$serieAPIResult` array. 

```
return view('serie.searchAPI', [
	'results' => $serieAPIResult['shows']
]);

```

`$serieAPIResult` should have data that we received as a response to our call to the BetaSeries API. 

```
//Call to BetaSeries API using a GET method from Laravel's HTTP Facade.
        $apiResponse = Http::get($this->urlBetaserie . "/shows/display", [
            'key' => env('BETASERIES_API_KEY'),
            'id' => $serieID
        ]);
```

The culprit was the environment variable that stores the BetaSeries API key was missing ! Oops 🙈

Once I made sure that I was receiving data from the API, I proceeded to replace the Bulma styling with Bootstrap styling. 
Everything seemed to work fine but when I returned on the import page and submitted my search nothing appeared on the page. 

I also did not have a single error on my consoles. Catastrophe ! 

So I proceeded to remove my Bootstrap styling and get the code back to its former state to see if it still worked with Bulma's classes. 

```
<form action="">
    <div class="field">
        <label class="label">Nom de la série</label>
        <div class="control">
            <input class="input" type="text" name="name" placeholder="Nom de la série" autocomplete="off">
        </div>
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-link">Rechercher</button>
        </div>
    </div>
</form>
```

To my surprise, it did work. So I thought that I must have made a mistake with Bootstrap's form validation and its components. 

After much inspection, I found that the problem was that I did not give the right name attribute for my `<input>` element. 
My application was expecting a name attribute with a "name" value for the `<input>` element as my function `getSeriesByTitle` expects a name variable. 

```
public static function getSeriesByTitle(string $name)
    {
        // Si on en est là, le contenu de la recherche est validé et on peut faire l'appel à l'API
        // en utilisant la facade Http de Laravel : https://laravel.com/docs/8.x/http-client
        $apiResponse = Http::get('https://api.betaseries.com/search/shows', [
            'key' => env('BETASERIES_API_KEY'),
            'text' => $name
        ]);
        // On extrait les données de la réponse
        return $apiResponse->json();
    }
```

To correct it, I simply had to replace the value of the name attribute for my `<input>` element like so: `<input class="form-control" type="text" name="name" placeholder="Nom de la série" autocomplete="off" required>`
