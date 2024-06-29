FROM python:3.12.3-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    python3-dev \
    && apt-get clean

COPY . /app/

# Install python dependences
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000
