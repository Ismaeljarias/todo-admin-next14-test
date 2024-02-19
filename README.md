# Development
Steps to run this project:

1. Start the docker-compose
```
docker compose up -d
```

2. Rename the .env.example to .env
3. Replace the values of the .env file with the values of the .env.example file
4. Run seed to [create local db](localhost:3000/api/seed)


# Prisma commnads
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```



# Prod


# Stage