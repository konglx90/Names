import sys, json, random

tip = """
请确保：
1. CSV格式是UTF-8
2. CSV第一行是键值

用法：
python csv2json.py foobar.csv
其中foobar.csv是需要转换的源数据文件

运行环境：
Python 3.4.3

日期：
2015年12月29日
"""
print(tip)

# 获取输入数据
input_file = sys.argv[1]
lines = open(input_file, "r", encoding="utf_8_sig").readlines()

# 为了节省空间， 随机去掉3/5
lines = [line.strip() for line in lines if random.randint(0, 10) > 5 and len(line)==6]

print(len(lines), lines)

# import time
# time.sleep(100)

json_str = json.dumps(lines, ensure_ascii=False, indent=4)
output_file = input_file.replace("csv", "json")

# write to the file
f = open(output_file, "w", encoding="utf-8")
f.write(json_str)
f.close()

print("解析结束！")