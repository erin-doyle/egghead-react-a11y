# Setting up a Windows VM
There are times when we really need to be able to run something in Windows.  Whether testing something in IE or testing 
something with the NVDA screen reader, etc, these kinds of things can only be done on a Windows machine.  Setting up a 
Windows VM is a great solution to these needs!

## VirtualBox
This article will focus on using VirtualBox.

### References
* https://www.virtualbox.org/manual/ch01.html

### Installing
1. Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Download a [Windows 10 ISO](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)
3. Unzip the downloaded Windows ISO (you may need to use something like [The Unarchiver](https://theunarchiver.com/))
4. Open VirtualBox and click on the “New” button to build a new virtual machine
5. Name the new virtual machine “Windows 10 VM” (or something equally obvious), select “Microsoft Windows” as the type and choose “Windows 10” as the version, then choose Continue
6. Select to create a new virtual hard drive, then choose Continue again
7. Back at the primary VirtualBox screen, choose “Start” to boot the new Windows 10 volume
    1. If you get an error that says **'kernel driver not installed (rc=-1908)'** see the Troubleshooting section below
8. Since there is no drive or OS installed yet, you will be asked to choose a virtual optical disk, click on the Folder icon and choose the Windows 10 ISO you downloaded earlier, then click “Start”
9. In a moment or two you’ll be in the Windows 10 installer, select your language and click “Next”
10. Go through the standard Windows 10 installation experience
11. You can now use the VM as you normally would a Windows machine.  You can install whatever additional tools or applications you need to perform testing such as NVDA, etc.

### Troubleshooting
#### Failed Install or "kernel driver not installed (rc=-1908)" error when starting an image

**References:**
* [Solving VirtualBox “kernel driver not installed (rc=-1908)” Error on macOS](https://medium.com/@Aenon/mac-virtualbox-kernel-driver-error-df39e7e10cd8)
* [How to Install VirtualBox on macOS Mojave and High Sierra](https://matthewpalmer.net/blog/2017/12/10/install-virtualbox-mac-high-sierra/index.html)
* [Install Virtualbox 6 on Mac 10.14 Mojave failed with kernel install error](https://stackoverflow.com/questions/55004803/install-virtualbox-6-on-mac-10-14-mojave-failed-with-kernel-install-error)


There is a security issue between certain versions of Virtualbox and MacOS where installing VirtualBox will fail without any detail as to why or starting an image will fail with an error such as 'kernel driver not installed (rc=-1908)'.  It seems that the MacOS is blocking certain parts of VirtualBox from running without making that obvious and permission needs to be granted.  Here are some things to try:

1. If VirtualBox is already installed and you are receiving an error when trying to start an image:
    1. Check the System Preferences > Security & Privacy settings for a message “System software from developer, ‘Oracle, America, Inc.‘ was blocked from loading.” with a button to "Allow" VirtualBox allow kernel modules
    2. If you do not see this message then you will need to re-install or upgrade VirtualBox (this re-install will likely fail, see next step).
2. If you are installing VirtualBox and the installation fails for no apparent reason: VirtualBox on macOS failed to install
    1. Check the System Preferences > Security & Privacy settings for a message “System software from developer, ‘Oracle, America, Inc.‘ was blocked from loading.” with a button to "Allow" VirtualBox allow kernel modules
3. If neither of the above steps worked try:
    1. Restart your Mac in recovery mode ("cmd + r" right as the computer turns on, letting up when you see the Apple logo)
    2. Open terminal (under Utilities menu) and enter the following:
        ```bash
        spctl kext-consent add VB5E2TV963
        # VB5E2TV963 is the identifier for Oracle
        ```
    3. Restart your computer


### Recommended Settings
#### RAM
1024 – 2048MB is what Microsoft recommends as the minimum for Windows 10 but 4GB is the lowest allowed in the VirtualBox settings

#### Video Memory
18 MB is the minimum recommended

#### Audio
You may need to change the default settings to get audio to work in the VM.  The following values may possibly vary based on the host machine model:

1. Check the "Enable Audio" box
2. Make sure "Host Audio Driver" is set to "CoreAudio"
3. Set "Audio Controller" to "Intel HD Audio"


### Logging In
The default password is: Passw0rd!



### Accessing services running locally on the host machine
The default Network settings should already support this (using an "Attached to" value of "NAT").  All that needs to be 
determined is what IP address to use in the VM ("guest") to reach the desired service on the host machine and this will 
be the Default Gateway address on the guest machine.  To find the Default Gateway address:



1. In the command prompt enter the command: ipconfig
2. the output should look something like this: 
```bash
Windows IP Configuration

Ethernet adapter Local Area Connection:

        Connection-specific DNS Suffix  . : cashstar.lan
		Link-local IPv6 Address . . . . . : fe80::ed93:d881:9c62:49a%3
        IPv4 Address. . . . . . . . . . . : 10.0.2.15
        Subnet Mask . . . . . . . . . . . : 255.255.255.0
        Default Gateway . . . . . . . . . : 10.0.2.2
```

In this example, the guest can reach the host machine on `10.0.2.2`.

So now if, for example the host machine is running a web server on port 6006, you should be able to connect to that web 
server on the host by openning a browser in the VM and entering a URL of: `10.0.2.2:6006`.

#### Hosts File
You can make this even easier by modifying the hosts file in the Window's VM to map a domain name to your host machine's IP Address:

1. Open the Start Menu
2. Type Notepad in the search field
3. In the search results, right-click Notepad and select Run as administrator
4. From Notepad, open the following file: `c:\Windows\System32\Drivers\etc\hosts`
5. Add a new line to the end of the file
6. Add an entry on that new line with the following format, replacing the fake values with the actual ones you wish to 
use, then save your file: 
```bash
10.0.2.2		the_domain_name_you_wish_to_use			# any comments go here
```


### VM State
When you close the VM you are presented 3 options.  This section of the manual, Saving the State of the Machine, explains them well. 

What is important to know about the state of the VM is that you cannot update the settings when the VM is in the Saved state.  In order to transition the VM to a state that allows its settings to be modified either:

1. highlight the VM in virtualbox, and press "discard"
2. restart the VM, and the next time you close the VM, use the "shut down" option.


### Snapshots
Once you've got your VM installed and configured properly it would be wise to save a snapshot.  The Windows ISO will expire after 90 days so you'll want a nice place to start over from.  See here for the section in the manual on Snapshots.
