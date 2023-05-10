# import replicate
# prompt = input()
# 
# output = replicate.run(
    # "rossjillian/controlnet:d55b9f2dcfb156089686b8f767776d5b61b007187a4e1e611881818098100fbb",
    # input={"image":open("/home/arjun/Pictures/Webcam/1.jpg","rb"),"prompt":prompt,"structure":"depth"}
# )
# print(output)

import replicate

print("enter the prompt:")
prompt = input()
output = replicate.run(
  "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
  input={"prompt": prompt }
)

print(output)
# ['https://replicate.com/api/models/stability-ai/stable-diffusion/files/50fcac81-865d-499e-81ac-49de0cb79264/out-0.png']
