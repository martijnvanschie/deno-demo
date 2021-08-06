# Deno Demo App

A quick and easy sample project to showcase a [Deno](https://deno.land/) Microservice and HTML Client Application.

## Installation

### Requirements

#### Deno

First of all you need to have Deno installated. You can use any of the available methods. I chose `Chocolatey` but it does not matter.

[Deno Installation](https://deno.land/manual/getting_started/installation)

#### MongoDB

This example is using a `MongoDB` so make sure you have one installed locally or a cloud version. You need to check configure the connection in the `controller.ts`.

```Typescript
client.connectWithUri("mongodb://localhost:27017");
```

## Run

To start the service navigate to the `deno-service` folder and run the following command:

```bash
deno run --allow-read --allow-write --allow-net --allow-plugin --unstable .\app.ts
```

## Tips

### Check your module versions

Always check for the latest versions of mudules.

Get the official ones from the Deno Standard Library
[Deon Standard Library](https://deno.land/std)

Get the third party ones from the Deno Third Party Modules Library
[Third Party Modules](https://deno.land/x)

## Issues

### Property 'openPlugin' does not exist

```bash
error: TS2339 [ERROR]: Property 'openPlugin' does not exist on type 'typeof Deno'. 'Deno.openPlugin' is an unstable API. Did you forget to run with the '--unstable' flag?
  return Deno.openPlugin(localPath);
```

Run the following command to clear the cache

`deno cache .\app.ts --unstable`

## MongoDB

### Start

Run the following command to start the MongoDB Service using the specified data folder.

`.\mongod.exe --dbpath C:\Apps\Data\MongoDB`