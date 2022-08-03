import { APIGatewayProxyResultV2 } from 'aws-lambda'

export const handleHelloWorld = async (): Promise<APIGatewayProxyResultV2> => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: `
      <!DOCTYPE html>
      <html class="h-full" lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello World!</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="h-full flex flex-col items-center justify-center">
          <h1 class="text-3xl">Hello World!</h1>
        </body>
      </html>
    `,
  }
}
