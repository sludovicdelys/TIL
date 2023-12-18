# What is serverless ?

### 📚 Resources
[Ashher Syed from the IBM Cloud Team](https://www.youtube.com/watch?v=vxJobGtqKVM)

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

# A serverless future outside the cloud ? 

### 📚 Resources
- [Lucas Merdinian from Scaleway](https://www.scaleway.com/en/blog/futurofserverless/)
- [Mary Branscome from The New Stack](https://thenewstack.io/webassembly/what-is-webassembly/)

Today it is a service provided only major cloud providers, but could we imagine Serverless services outside of that environment ? 

## Self-managed Serverless
The goal is to give companies all the advantages of Serverless (simplicity of use,  auto-scaling, scaling to zero …) without being bound to any cloud provider.
 
Open source frameworks run Kubernetes for managing containerized applications, which still feels like serverless because it can provide a flexible and scalable platform for deploying and running serverless workloads even if it doesn’t handle infrastructure management. 

Having serverless systems at company level can be cost efficient with the mutualization of infrastructures.   Cloud provider’s serveless services benefit the service consumers who only pay for the resources used, and the cloud provider that maximizes its resource usage. 

In a self-managed context, these benefits apply only to the organization who can : 
- optimize performance
    - choose hardware of preference
    - security constraints are less challenging on shared servers that run on the company’s own infrastructure instead of the cloud provider’s
It’s a viable solution but requires sufficient human and infrastructure resources.

## Serverless for edge applications
The edge are all systems between the cloud and the end user, like Content Delivery Networks. 
Being able to perform most operations closer to the user is faster, more private and reduces network costs. 

Using a serverless solution for an edge application can allow us to do tasks using only the required resources on-site instead of a data center. 
 Operations like verifying a signature, hashing data, or even performing a simple media transformation  can be run on the Content Delivery Networks where some of the data is replicated. 

In order to run serverless workloads at the edge, they need to be lighter and start faster than they do in the cloud.   This is where Web Assembly (WASM) built for the web browser comes in. 

Mary Branscome described it this way : 
> “Think of it as a small, fast, efficient and very secure, stack-based virtual machine that doesn’t care what CPU or OS it runs on, that’s designed to execute portable bytecode — compiled from code originally written in C, C++, Rust, Python or Ruby — at near-native speed”

It provides strong service isolation in both the web development sector and the cloud industry. 

Serverless at the edge with WASM promises that tasks start almost instantly, without any delay. 

## Decentralized computing and Web 3.0 on Serverless

With Serverless developers can use managed services and focus on their core development tasking instead of managing computing resources. 

Decentralized Applications, also known as DApps, run on blockchain technology, which is serverless as it runs on a federation of nodes rather than on a single server. Your application runs as soon as it is deployed and you don’t have to worry about one of your providers failing. For Web 3.0, the end user offers are still limited to specific use cases like storing information (digital or physical asset ownership contracts, financial transactions, etc.) as well as existing web 2.0 services, now using decentralized tools for better privacy and fairer revenue distribution. 

For now most DApps only rely on blockchain to perform transactions through smartphone contracts while using conventional services to host their front and backend as blockchain based response time is not at the web industry current levels.

IFPS (InterPlanetary File System) is a decentralized solution that makes it possible to store files like images and frontend code on its fully decentralized network. Making them  immutable, impossible to remove, and helps reduce bandwidth costs since the content is delivered from the closest node. 

## Can Serverless be cloudless ?
These trends might seem threatening because they create substitutes for cloud based infrastructure, but they actually represent an opportunity to benefit from new technologies to develop and enhance our own products. 

At Scaleway, their serverless products (Serverless Containers and Serverless Functions) are based on open-source technologies that can be used to develop self-hosted serverless solutions. 

They are looking into WASM to enhance their performance. In the same way, blockahin-based software can be used to develop our resiliency while better distributing resources and data across our data centers, improving security. 
