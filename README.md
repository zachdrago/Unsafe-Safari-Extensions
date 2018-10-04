# Unsafe Safari Extensions
If you've updated to Safari 12, or macOS Mojave, you're probably aware that some of your extensions are no longer supported. 

Luckily these extensions can be reinstalled manually via the Safari Extension Builder. The only downside to this, is that the extension will need to be reinstalled each time your quit/launch Safari, and it's preferences will not be saved. 

You can read more about this here: https://georgegarside.com/blog/macos/install-any-safari-extension-macos-mojave/

With the help of the article above, and the community of commenters, I have put together an Automator App that automatically runs(installs)  Safari Extension Builder extensions.

> **Note:** You may need to change the repeat number in the script, as it needs to be greater than the number of extension you have in your Extension Builder.
> 
![enter image description here](https://github.com/zachdrago/Unsafe-Safari-Extensions/raw/master/img/repeat.png)


## Automator App
As I was unable to get the script to run automatically on Safari launch,  I created an Automator App to help a bit. The code below opens Safari, and then loops through and runs all of your extensions in Extension Builder (*you still have to manually enter your system password for each one* ). You can download mine [here](http://google.com), or create your own in Automator using the code below:

	tell application "Safari" to activate
    tell application "System Events"
        tell process "Safari"
        	set frontmost to true
        	click menu item "Show Extension Builder" of menu "Develop" of menu bar 1
        	set frontmost to true
        	delay 0.5
    		
    		set myCount to count row of table 1 of scroll area 1 of splitter group 1 of window "Extension Builder"
    		
	    	repeat 6 times  -- MUST BE HIGHER THAN THE # OF EXTENSIONS IN YOUR EXTENSION BUILDER
				key code 125
			end repeat
		
			repeat with counter from 1 to myCount
				click row counter of table 1 of scroll area 1 of splitter group 1 of window "Extension Builder"
				click button "Run" of splitter group 1 of window "Extension Builder"
				delay 0.5
				key code 126
			end repeat
		
			click button 1 of window "Extension Builder"
		end tell
	end tell

![enter image description here](https://github.com/zachdrago/Unsafe-Safari-Extensions/raw/master/img/automator.png)

## Just the AppleScript
Here is just the altered AppleScript to loops through and run all of your extensions in the Extension Builder (does not launch Safari). *You still have to manually enter your system password for each one.* 

    tell application "System Events"
        tell process "Safari"
        	set frontmost to true
        	click menu item "Show Extension Builder" of menu "Develop" of menu bar 1
        	set frontmost to true
        	delay 0.5
    		
    		set myCount to count row of table 1 of scroll area 1 of splitter group 1 of window "Extension Builder"
    		
	    	repeat 6 times  -- MUST BE GREATER THAN THE # OF EXTENSIONS IN YOUR EXTENSION BUILDER
				key code 125
			end repeat
		
			repeat with counter from 1 to myCount
				click row counter of table 1 of scroll area 1 of splitter group 1 of window "Extension Builder"
				click button "Run" of splitter group 1 of window "Extension Builder"
				delay 0.5
				key code 126
			end repeat
		
			click button 1 of window "Extension Builder"
		end tell
	end tell

