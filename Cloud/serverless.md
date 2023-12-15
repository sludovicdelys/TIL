# What is serverless ?

### 📚 Resources
https://www.youtube.com/watch?v=vxJobGtqKVM

**Bare metal**
- You are managing and configuring the servers and the environment that you want to deploy your code on. 
- You are responsible for installing OS, all the patching and etc. 

**Virtual machine**
-  Resource optimized from the bare metal where you were handling idle times much better
- Still responsible for setting up environment

**Containers**
- You are packaging your deployment code, application code and all of its dependencies into a single container which could run on any underlying infrastructure. 
- Managing containers can become a challenge when you scale up your application. 
- At any point in time, your application is running on one server. That’s some idle time. 

> **Idle time ->**
In a traditional server based ennvironment, when your application is not actively handling requests, the servers are still running. Idle time is when these servers are not doing something; running a process. 

## Serverless
- Mainly focused on business logic
- FaaS : Function-as-a-Service -> compute platform where you can execute functions
- Functions act as a single unit of deployment of your code (ex file processing)
- These functions are called by events (user interaction that execute a function) 
- You have an Event Driven Architecture as part of the FaaS platform. Its an ecosystem of the cloud provider which has different services running (database, IoT, etc.)
- Drawbacks : 
    - stateless containers spin off for a little bit time and then are deleted aftwards. So if your code doesn’t execute in that time frame, your app could fail.
    - you can run into some latency issues depending on how time sensitive you want your app

> **Stateless containers ->**
Stateless means that the container doesn’t retain any memory of previous interactions or states. Each time it is called, it starts like a blank slate. It operates based on the inputs it receives at specific moments.
In serverless computing, containers execute code in response to events (HTTP requests, database changes, etc.)

- Benefits :
    - you pay for execution only because there is no idle time
    - auto scalables -> resource management is the cloud provider’s responsibility
    - Faster Time to Market -> more time for developing the product and solve customer problems
    - Polyglot environments -> supports multiple languages, frameworks and tools
    - Serverless apps are Highly Available -> the cloud provider takes care of all the fault tolerance and the MZRs. All the services that you’re using in even driven architecture are fault tolerant

> **Multi Zone Regions ->** 
In the world of cloud computing, data centers are organized into regions. A region is a geographic area where multiple data centers are located and they are known as Availability Zones (AZs). They are physically seperated but connect with high speed network. An AZ, is designed to be isolated from failures in order to provie high availability and fault tolerance. “Multi-Zone Regions” means deploying your application accross multiple AZs within a single region. 