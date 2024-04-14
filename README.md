# Anime List - NextJS 13

In this project, I created a website using the Next JS framework.

## Deployment

To deploy this project run

```bash
  npm run dev
```

## API Reference

#### Get all items

```http
  GET https://api.jikan.moe/v4
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://api.jikan.moe/v4/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Demo

[animelist-nextjs.vercel.app](https://animelist-nextjs.vercel.app/)
