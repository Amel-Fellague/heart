from turtle import *
import math

setup(800, 700)
bgcolor("black")
title("Heart")

speed(0)
hideturtle()
color("hotpink")
pensize(2)

for i in range(126):
    t = i * 0.05

    x = 16 * math.sin(t) ** 3
    y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)

    penup()
    goto(x * 15, y * 15)
    pendown()

    write("I Love You", align="center", font=("Arial", 8, "bold"))

done()