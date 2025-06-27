# Use the official Bun base image
FROM oven/bun

# Set the working directory in the container
WORKDIR /app

# Copy all backend files into the container
COPY . .

# Install dependencies
RUN bun install

# Run your backend entry file (index.ts)
CMD ["bun", "run", "index.ts"]
