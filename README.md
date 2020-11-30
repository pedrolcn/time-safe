# Time-safe

Have you ever mistakenly passed an interval in miliseconds to a function which expected seconds?  
We all have, and then your cache entry which you intended to only last for 1 minute now lasts for 16 hours.

time-safe strives to turn such runtime bugs into compile-time errors by providing a strongly-typed interval API.

## Usage

install via your package manager of choice:
```shell
$ yarn add @pedrolcn/time-safe
$ npm i @pedrolcn/time-safe
```

time-safe\`s API is exposed via the TimeSafe object exported from the lib\`s index and contains factory methods for all supported interval types:

```typescript
import { TimeSafe, Second } from '@pedrolcn/time-safe';

async function setRedisEntry(key: string, value: any, ttl: Second) {
  const redisClient = ... //acquire redis client somehow
  await redisClient.set(key, value, `EX`, ttl.asSeconds());
}

setRedisEntry('foo', 'bar', TimeSafe.seconds(60))
```

This way the function signature is very explicit about what type of interval it expects (seconds) and if you try and pass is anything other than a duration in seconds it emmits a type-error.

```typescript
//Argument of type 'number' is not assignable to parameter of type 'Second'.
setRedisEntry('foo', 'bar', 60)

//Argument of type 'Milisecond' is not assignable to parameter of type 'Second'.
//  Types of property 'variant' are incompatible.
//    Type 'Variant.MILISECOND' is not assignable to type 'Variant.SECOND'
setRedisEntry('foo', 'bar', TimeSafe.miliseconds(60))
```

## Supported intervals

time-safe supports the following interval types, exporting interfaces representing these types and providing factory functions for them on the time-safe object as well as `as<INTERVAL>()` methods on the instances of the Interval classes to convert between the interval objets and the underlying number of a given unit of time contained in it.
 - Milisecond
 - Second
 - Minute
 - Hour
 - Day
 - Week

It does not support months or years because they do not represent a fixed amount of time and thus are beyond the scope of this project.