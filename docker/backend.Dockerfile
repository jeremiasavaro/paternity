FROM python:3.12-slim

WORKDIR /app

COPY ../backend-paternity/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ../backend-paternity .

EXPOSE 5000
CMD ["python", "run.py"]
