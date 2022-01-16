# Experiment with Redis in Node

Experiment with Redis in Node.

Alternatively for .NET, see https://github.com/johnnyoshika/redis-book-app.

## Setup

- `docker pull redislabs/rejson` (pull redislabs/rejson instead of redis to get JSON support)
- `docker run --name redis-fun -d -p 6379:6379 redislabs/rejson`
- Check running containers: `docker ps`
- View logs: `docker logs redis-fun`

## Run

```bash
npm ci
node index
```

## Redis CLI

- Start new interactive session (`-it`) inside the running container
  - `docker exec -it redis-fun sh`
- Start Redis CLI once we've attached to our container
  - `redis-cli`

## Redis GUI

- [RedisInsight](https://redis.com/redis-enterprise/redis-insight/)
- Connect with:
  - Host: localhost
  - Port: 6379
