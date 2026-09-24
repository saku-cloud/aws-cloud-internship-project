import csv
from collections import Counter
from datetime import datetime

FILE = "web-access-logs.csv"

rows = []
with open(FILE, newline="", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

pages = Counter(row["path"] for row in rows)
errors_4xx = sum(400 <= int(row["status"]) < 500 for row in rows)
errors_5xx = sum(500 <= int(row["status"]) < 600 for row in rows)
unique_ips = len({row["ip"] for row in rows})

hours = Counter(datetime.strptime(row["timestamp"], "%Y-%m-%d %H:%M:%S").hour for row in rows)
peak_hour, peak_count = hours.most_common(1)[0]

print("=== Web Access Log Analysis ===")
print(f"Total requests: {len(rows)}")
print("\nTop pages:")
for path, count in pages.most_common(5):
    print(f"  {path}: {count}")

print(f"\n4xx errors: {errors_4xx}")
print(f"5xx errors: {errors_5xx}")
print(f"Unique IP addresses: {unique_ips}")
print(f"Peak traffic hour: {peak_hour:02d}:00 ({peak_count} requests)")
