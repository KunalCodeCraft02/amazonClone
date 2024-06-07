# num = int(input("Enter Number :"))
# print(num)


# if(num>1):
#     for i in range(num,2):
#         if(num % i == 0):
#             print("The number not is prime")
#         else:
#             print("The number is prime number")

# upper = int(input("Enter upper number :"))

# print(upper)

# if(upper==1):
#     for i in range(1,11):
#         print(i*2)
#         if(i*2==16):
#             break




# num = int(input("Enter Number :"))
# fact = 1

# if(num<0):
#     print("The Factorial of the 0 Does not Exits")
# if(num==0):
#     print("The Factorial of the 0 is 1")

# for i in range(1,num+1):
#     fact = fact*i
# print('The Factorial is ',fact)


# multiplication table


# n = int(input("Enter Number :"))

# for i in range(1,11):
#     print(f"{n} x {i} = {n*i}")


# Multiplication using while loop

# n = 5
# i = 1
# while(i<=10):
#     print(i*n)
#     i+=1


# a = int(input("Enter Number in 0 To 1 :"))
# if(a==1):
#     for i in range(1,10):
#         print(i*2)
#         if(i*2==16):
#             break


# b = int(input("Enter Number :"))
# print(b)

# if(b%2==0):
#     print("The number is Even")
# else:
#     print("The number is Odd")
# num = [12,34,56,677,545]
# a = int(input('Enter Number in 1 & 0'))

# if(a==1):
#     for i in range(1,10):
#         print(i*2)
#         if(i*2==16):
#             for i in range(1,10):
#                 print(i*3)
#                 if(i*3==21):
#                     break

# Fibonachi Sequence

# a = 0
# b = 1
# num = int(input("Enter Number to Get Fibonachi sequence :"))
# if(num==1):
#     print(a)
# else:
#     print(a)
#     print(b)
#     for i in range(1,num+1):
#         c = a + b
#         a = b
#         b = c 
#         print(c)


# num = int(input("Enter Number :"))

# if (num<0):
#     print("Enter Positive Number")
# else:
#     sum = 0 
#     while (num>0):
#         sum +=num
#         num -=1
        
#         print(sum)


# Function Practice


# def FindHcf(x,y):
#     if(x>y):
#         smaller = y
#     else:
#         smaller = x
        
#     for i in range(1, smaller+1):
#         if((x%i==0) and (y%i==0)):
#             hcf = i
#             print(f"The HCF of the Given number is :",hcf)        
        
# FindHcf(12,30)



# Find a Factorial of the Number 

# num = int(input("Enter Number :"))

# for i in range(1,num+1):
#     # print(i)
#     if(num%i==0):
#         print(i)
        
        
# Mini Calculator

# num1 = float(input("Enter First  Number :"))        
# num2 = float(input("Enter First Number :"))        


# print("Enter 1 For Addition \nEnter 2 For Subtraction \nEnter 3 For Multiplication \nEnter 4 For Divison")

# choise = int(input("Enter Your Choise : "))
# if(choise==1):
#     print(num1+num2)
# elif(choise==2):
#     print(num1-num2)
# elif(choise==3):
#     print(num1*num2)
# elif(choise==4):
#     print(num1/num2)
# else:
#     print("Invalid Input Please Try Again..")
    
# Display Calender

# import calendar

# year = int(input("Enter Year :"))    
# month = int(input("Enter Month :"))    

# calendar = calendar.month(year,month)
# print(calendar)




                   




                       
          


                
