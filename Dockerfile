# Use a lightweight Node.js image
FROM node:16-slim

# Set working directory
WORKDIR /app

# Copy source files
COPY src /app/src

# Install a static server for production
RUN npm install -g serve

# Expose port
EXPOSE 5000

# Serve the application
CMD ["serve", "-s", "src", "-l", "5000"]
