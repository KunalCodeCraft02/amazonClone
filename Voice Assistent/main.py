import speech_recognition as sr
import pyttsx3
import subprocess

engine = pyttsx3.init()

engine.say("Hello World")
engine.runAndWait()

# Initialize recognizer class (for recognizing the speech)

r = sr.Recognizer()

# Reading Microphone as source
# listening the speech and store in audio_text variable

with sr.Microphone() as source:
    print("Talk")
    try:
        audio_text = r.listen(source, timeout=5)  # Set a timeout of 5 seconds

        # using google speech recognition
        cmd = r.recognize_google(audio_text)
        print("Text: " + cmd)

        if cmd == "map start":
            engine.say("Enter your IP")
            engine.runAndWait()
            ip = input("Enter IP: ")
            engine.say("Enter Port ")
            engine.runAndWait()
            port = input("Enter Your Port: ")

            if port and ip:
                print("SELECT YOUR SCAN TYPE A FOR AGGRESSIVE SCAN AND B FOR SYN SCAN")
                scantype = input("ENTER YOUR SCAN TYPE: ")
                if scantype.lower() == "a":
                    subprocess.run(["nmap", ip, "-A", "-v", "-p", port])
                elif scantype.lower() == "b":
                    subprocess.run(["nmap", ip, "-sS", "-v", "-p", port])
                else:
                    print("INVALID CREDENTIALS! PLEASE TRY AGAIN")
        elif cmd == "mac address change":
           subprocess.run([])
                    
                    
    except sr.UnknownValueError:
        print("Sorry, I did not hear anything")
    except sr.RequestError as e:
        print(f"Error connecting to Google API: {e}")
