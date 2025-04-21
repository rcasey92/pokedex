# Step 1: Use an official Node.js image as the base image
FROM node:22-alpine AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install --frozen-lockfile

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a lightweight image for the production environment
FROM node:22-alpine AS runner

# Step 8: Set the working directory inside the container
WORKDIR /app

# Step 9: Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/next.config.mjs ./

# Step 10: Install only production dependencies
RUN npm install --production --frozen-lockfile

# Step 11: Expose the port the app runs on
EXPOSE 3000

# Step 12: Start the Next.js application
CMD ["npm", "run", "start"]