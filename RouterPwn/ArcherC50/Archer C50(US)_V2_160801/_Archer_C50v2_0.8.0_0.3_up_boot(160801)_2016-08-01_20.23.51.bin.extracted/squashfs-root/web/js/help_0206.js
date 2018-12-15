// JavaScript Document
(function($) {
    $.helpContent = {
        "networkMap": {
            "TITLE": "Internet",
            "CONTENT": [{
                "type": "name",
                "title": "Internet Status",
                "content": "Displays the current status of the Internet connection of the router."
            }, {
                "type": "name",
                "title": "Connection Type",
                "content": "Displays the type of Internet connection."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "Displays the current Internet IP address assigned to the router."
            }, {
                "type": "name",
                "title": "Secondary Connection/IP Address",
                "content": "Displays the secondary connection type and IP address."
            }, {
                "type": "title",
                "title": "Router"
            }, {
                "type": "title",
                "title": "Wireless 2.4GHz/5GHz"
            }, {
                "type": "name",
                "title": "SSID",
                "content": "Displays the current wireless network name of the 2.4GHz/5GHz band frequency."
            }, {
                "type": "name",
                "title": "Channel",
                "content": "Displays the channel of which the wireless 2.4GHz/5GHz network broadcasts."
            }, {
                "type": "name",
                "title": "MAC",
                "content": "Displays the current MAC address of the wireless 2.4GHz/5GHz."
            }, {
                "type": "title",
                "title": "Guest Network 2.4GHz/5GHz"
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays whether the wireless Guest Network 2.4GHz/5GHz is on (enabled) or off (disabled)."
            }, {
                "type": "name",
                "title": "SSID",
                "content": "Displays the wireless network name of Guest Network."
            }, {
                "type": "title",
                "title": "Wireless/Wired Clients"
            }, {
                "type": "name",
                "title": "Name",
                "content": "Displays the name of the client connected to the router."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "Displays the assigned IP address of the client."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address of the client."
            }, {
                "type": "title",
                "title": "Printer"
            }, {
                "type": "name",
                "title": "Name",
                "content": "Displays the name of the printer connected to the router via USB port."
            }, {
                "type": "title",
                "title": "USB DISK"
            }, {
                "type": "name",
                "title": "USB Disk",
                "content": "Displays the brand of the USB disk connected to the router."
            }, {
                "type": "name",
                "title": "Total",
                "content": "Displays the total volume of the USB disk."
            }, {
                "type": "name",
                "title": "Available",
                "content": "Displays the available space of the USB disk."
            }]
        },
        "wanBasic": {
            "TITLE": "Internet",
            "CONTENT": [{
                "type": "name",
                "title": "Auto Detect",
                "content": "Click this button to have the router automatically detect your current Internet connection type."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "If you are not sure which Internet connection type you have, use the Auto Detect function or contact your ISP for assistance."
            }, {
                "type": "title",
                "title": "Internet Connection Type: Static IP"
            }, {
                "type": "name",
                "title": "IP Address/Subnet Mask/Default Gateway/Primary DNS/Secondary DNS",
                "content": "Enter the information provided by your ISP."
            }, {
                "type": "title",
                "title": "Internet Connection Type: Dynamic IP"
            }, {
                "type": "name",
                "title": "DO NOT Clone MAC Address/Clone Current Computer MAC Address",
                "content": "Select whether to clone your MAC address or not, according to your ISP."
            }, {
                "type": "title",
                "title": "Internet Connection Type: PPPoE"
            }, {
                "type": "name",
                "title": "Username/Password",
                "content": "Enter the username and password provided by your ISP. These fields are case-sensitive."
            }, {
                "type": "title",
                "title": "Internet Connection Type: L2TP/PPTP"
            }, {
                "type": "name",
                "title": "Username/Password",
                "content": "Enter the username and password provided by your ISP. These fields are case-sensitive."
            }, {
                "type": "name",
                "title": "Secondary Connection (Dynamic IP or Static IP)",
                "children": [{
                    "type": "name",
                    "title": "Dynamic IP",
                    "content": "Select if the IP address and Subnet Mask are assigned automatically by the ISP."
                }, {
                    "type": "name",
                    "title": "Static IP",
                    "content": " Select if the IP address, Subnet Mask, Gateway, and DNS addresses are provided by the ISP, and enter these information into the corresponding fields."
                }]
            }, {
                "type": "name",
                "title": "VPN Server IP Address/Domain Name",
                "content": "Enter the VPN server’s IP address or domain name provided by your ISP."
            }]
        },
        "wirelessBasic": {
            "TITLE": "Wireless Settings",
            "CONTENT": [{
                "type": "name",
                "title": "Enable Wireless Radio",
                "content": "Select this checkbox to enable the 2.4GHz/5GHz wireless radio frequency."
            }, {
                "type": "name",
                "title": "Wireless Network Name (SSID)",
                "content": "You can leave the default wireless network name (SSID) as it is or enter a new name (up to 32 characters). This field is case-sensitive."
            }, {
                "type": "name",
                "title": "Hide SSID",
                "content": "Select this checkbox if you want to hide the 2.4GHz/5GHz network name (SSID) from the Wi-Fi network list."
            }, {
                "type": "name",
                "title": "Password",
                "content": "Enter a wireless password between 8 and 63 ASCII characters, or between 8 and 64 hexadecimal characters into this field (case-sensitive)."
            }]
        },
        "wlGuestDulBandBasic": {
            "TITLE": "Guest Network",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Guest Network allows you to set up a separate network with a separate wireless network name (SSID) and password that guests can use to access your wireless network."
            }, {
                "type": "name",
                "title": "Allow guests to see each other",
                "content": "Select this checkbox to allow the wireless devices on the Guest Network to see each other."
            }, {
                "type": "name",
                "title": "Allow guests to access my local network",
                "content": "Select this checkbox to allow the wireless devices on the Guest Network to access your local network shares and printers."
            }, {
                "type": "name",
                "title": "Enable Guest Network",
                "content": "Select this checkbox to enable the 2.4GHz/5GHz Guest Network feature."
            }, {
                "type": "name",
                "title": "Wireless Network Name (SSID)",
                "content": "Either use the default Guest SSID or create a new name (up to 32 characters)."
            }, {
                "type": "name",
                "title": "Hide SSID",
                "content": "Select this checkbox if you want to hide the Guest SSID from the Wi-Fi network list."
            }, {
                "type": "name",
                "title": "Password",
                "content": "Create a password between 8 and 63 ASCII characters, or between 8 and 64 hexadecimal characters (0-9, a-f, A-F), to secure the Guest Network."
            }]
        },
        "usbManage": {
            "TITLE": "Device Settings",
            "CONTENT": [{
                "type": "paragraph",
                "content": "The Device Settings page displays the related information of any connected USB storage device via the USB port."
            }, {
                "type": "name",
                "title": "Scan",
                "content": "Usually, the router automatically detects any newly attached device. If not, click this button to scan for any new connected device and refresh the page with the updated information."
            }, {
                "type": "name",
                "title": "Volume",
                "content": "Displays the name of the USB volume."
            }, {
                "type": "name",
                "title": "Capacity",
                "content": "Displays the total storage capacity of the USB."
            }, {
                "type": "name",
                "title": "Free Space",
                "content": "Displays the current available free storage space."
            }, {
                "type": "name",
                "title": "Safely Remove",
                "content": "Click this button to safely unmount the USB storage device before physically disconnecting it from the router.",
                "children": [{
                    "type": "paragraph",
                    "content": "Please note that the Safely Remove button only appears when there is a USB storage device connected to the router. Also, keep in mind that you are unable to unmount the USB device while the current volume is busy."
                }]
            }, {
                "type": "name",
                "title": "Active",
                "content": "This checkbox only appears when there is a USB storage device connected to the router. Select to enable file sharing of the USB device."
            }, {
                "type": "title",
                "title": "Sharing Settings"
            }, {
                "type": "name",
                "title": "Network/Media Server Name",
                "content": "Displays the name used to access the connected USB storage device."
            }, {
                "type": "title",
                "title": "Folder Sharing"
            }, {
                "type": "name",
                "title": "Share All",
                "content": "Toggle On to share all files and folders or Off to only share the selected folders."
            }, {
                "type": "name",
                "title": "Enable Authentication",
                "content": "It is strongly recommended to enable authentication to require users to enter a valid username and password to access the sharing folders."
            }, {
                "type": "name",
                "title": "Folder Name",
                "content": "Displays the name of the shared folder."
            }, {
                "type": "name",
                "title": "Folder Path",
                "content": "Displays the path to the shared folder."
            }, {
                "type": "name",
                "title": "Media Sharing",
                "content": "Indicates whether the shared folder is allowed for media sharing or not."
            }, {
                "type": "name",
                "title": "Volume Name",
                "content": "Displays the name of the shared volume."
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays the status of the shared folder by the light bulb indicator. Green (ON) is enabled and Grey (OFF) is disabled. You can enable or disable sharing by clicking the bulb."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Modify and Delete the corresponding shared folder."
            }, {
                "type": "name",
                "title": "Add",
                "content": "Click this button to create a new entry."
            }, {
                "type": "name",
                "title": "Delete",
                "content": "Click this button to remove the selected entry from the table."
            }, {
                "type": "name",
                "title": "Browse",
                "content": "Click to search for a shared folder."
            }, {
                "type": "name",
                "title": "Allow Guest Network Access",
                "content": "Select to allow clients on Guest Network to access the shared folders."
            }, {
                "type": "name",
                "title": "Enable Authentication",
                "content": "Select to require users to access the shared folders with a valid username and password."
            }, {
                "type": "name",
                "title": "Enable Write Access",
                "content": "Select to allow users to make changes to the folder content."
            }, {
                "type": "name",
                "title": "Enable Media Sharing",
                "content": "Select to enable media sharing."
            }]
        },
        "printSrv": {
            "TITLE": "Print Server",
            "CONTENT": [{
                "type": "name",
                "title": "Enable Print Server",
                "content": "Click On to enable the print server function."
            }, {
                "type": "name",
                "title": "Printer Name",
                "content": "Displays the name of your printer connected to the router."
            }, {
                "type": "note",
                "title": "To set up a Print Server that can be used across your network",
                "content": ["Connect a USB printer to the USB port of the router via a USB cable.", "Install the printer driver on your computer. Refer to the computer manufacturer’s manuals for instructions.", "Install the TP-LINK USB Printer Controller Utility either from the Resource CD (for Windows only) or download it (for both Windows and Mac OS X) from TP-LINK’s official website."]
            }]
        },
        "parentCtrl": {
            "TITLE": "Parental Control",
            "CONTENT": [{
                "type": "name",
                "title": "Status",
                "content": "Toggle On to enable the Parental Control feature. By default, this feature is disabled."
            }, {
                "type": "title",
                "title": "Devices Under Parental Control"
            }, {
                "type": "paragraph",
                "content": "Displays the list of devices under Parental Control."
            }, {
                "type": "name",
                "title": "Device Name",
                "content": "Displays the name of all connected client devices that are currently under Parental Control."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address of all connected client devices that are currently under Parental Control."
            }, {
                "type": "name",
                "title": "Internet Access Time",
                "content": "Displays the restriction access time periods."
            }, {
                "type": "name",
                "title": "Description",
                "content": "Displays a brief description of the connected device. It is an optional setting."
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays the current status (enabled or disabled) of the Parental Control of the corresponding device."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Modify or Delete the corresponding device."
            }, {
                "type": "note",
                "title": "To restrict a new client device",
                "content": ["Click Add.", "Click View Existing Devices and choose a currently connected device from the Access Devices List; or enter the Device Name and MAC Address manually to add a device that is not connected.", "Click the Internet Access Time icon to specify a time period during which the restriction applies.", "Enter a brief description into the Description field. (Optional)", "Select Enable.", "Click OK to save this entry."]
            }, {
                "type": "paragraph",
                "content": "To modify or delete a Parental Control entry, simply click the Modify icon to edit the information or the Delete icon to remove the corresponding entry."
            }, {
                "type": "paragraph",
                "content": "To delete multiple entries, select all the entries and click Delete above the table."
            }]
        },
        "status": {
            "TITLE": "Internet",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Displays relevant information about the Wide Area Network (Internet) connection."
            }, {
                "type": "title",
                "title": "IPv4"
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "The unique physical address assigned to the Internet (WAN) port of the router."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "The IP address assigned to the Internet (WAN) port of the router. If the IP address is shown as 0.0.0.0, this indicates no Internet access."
            }, {
                "type": "name",
                "title": "Subnet Mask",
                "content": "This parameter determines the network portion and the host portion of an IP address. The default is 255.255.255.0."
            }, {
                "type": "name",
                "title": "Default Gateway",
                "content": "The IP address used to connect the router to the network."
            }, {
                "type": "name",
                "title": "Primary DNS/Secondary DNS",
                "content": "The Domain Name System (DNS) translates host names and internet domains to IP addresses. The information of these DNS servers is assigned by the Internet Service Provider (ISP)."
            }, {
                "type": "name",
                "title": "Connection Type",
                "content": "The current connection type of the Internet (WAN) port."
            }, {
                "type": "title",
                "title": "IPv6"
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "The unique physical address assigned to the Internet (WAN) port of the router."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "The IP address assigned to the Internet (WAN) port of the router. If the IP address is shown as 0.0.0.0, this indicates no Internet access."
            }, {
                "type": "name",
                "title": "Default Gateway",
                "content": "The IP address used to connect the router to the network."
            }, {
                "type": "name",
                "title": "Primary DNS/Secondary DNS",
                "content": "The Domain Name System (DNS) translates host names and internet domains to IP addresses. The information of these DNS servers is assigned by the Internet Service Provider (ISP)."
            }, {
                "type": "name",
                "title": "Connection Type",
                "content": "The current connection type of the Internet (WAN) port."
            }, {
                "type": "title",
                "title": "Wireless 2.4GHz/5GHz"
            }, {
                "type": "paragraph",
                "content": "Displays relevant information about the Wireless Network."
            }, {
                "type": "name",
                "title": "Network Name (SSID)",
                "content": "The wireless network name, also known as SSID (Service Set Identifier)."
            }, {
                "type": "name",
                "title": "Wireless Radio",
                "content": "The current status (enabled or disabled) of the wireless network."
            }, {
                "type": "name",
                "title": "Mode",
                "content": "The current wireless mode."
            }, {
                "type": "name",
                "title": "Channel Width",
                "content": "The channel bandwidth of the wireless network."
            }, {
                "type": "name",
                "title": "Channel",
                "content": "The current wireless channel and its corresponding frequency (in GHz)."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "The MAC address of the wireless network radio on the router."
            }, {
                "type": "name",
                "title": "WDS Status",
                "content": "The current status (enabled or disabled) of the WDS mode."
            }, {
                "type": "title",
                "title": "LAN"
            }, {
                "type": "paragraph",
                "content": "Displays information about the Ethernet (LAN) ports."
            }, {
                "type": "title",
                "title": "IPv4"
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "The unique physical address assigned to the Ethernet (LAN) port of the router."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "The IPv4 address assigned to the Ethernet (LAN) port of the router. (Default: 192.168.0.1)."
            }, {
                "type": "name",
                "title": "Subnet Mask",
                "content": "This parameter determines the network portion and the host portion of an IP address."
            }, {
                "type": "name",
                "title": "DHCP",
                "content": "Displays whether the router’s built-in DHCP server is active for devices on the LAN ports or not."
            }, {
                "type": "title",
                "title": "IPv6"
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "The IPv6 address assigned to the Internet (LAN) port of the router."
            }, {
                "type": "name",
                "title": "Link-local Address",
                "content": "The IPv6 link address for the LAN interface."
            }, {
                "type": "name",
                "title": "Assigned Type",
                "content": "The type of IPv6 address for the LAN interface."
            }, {
                "type": "title",
                "title": "Guest Network 2.4GHz/5GHz"
            }, {
                "type": "paragraph",
                "content": "Displays information about the wireless network for guests."
            }, {
                "type": "name",
                "title": "Network Name (SSID)",
                "content": "The wireless network name (SSID) of your Guest Network."
            }, {
                "type": "name",
                "title": "Hide SSID",
                "content": "Displays whether the wireless network name (SSID) of the Guest Network is hidden or not."
            }, {
                "type": "name",
                "title": "Wireless Radio",
                "content": "The current status (enabled or disabled) of the Guest Network."
            }, {
                "type": "name",
                "title": "Allow guests to see each other",
                "content": " Displays whether all devices on the Guest Network are allowed to communicate with each other or not."
            }]
        },
        "ethWan": {
            "TITLE": "IPv4",
            "CONTENT": [{
                "type": "title",
                "title": "Internet Connection Type: Static IP"
            }, {
                "type": "paragraph",
                "content": "Select this type if you are provided with a specific (fixed) IP Address, Subnet Mask, Gateway, and DNS parameters by the ISP."
            }, {
                "type": "name",
                "title": "IP Address/Subnet Mask/Default Gateway/Primary DNS/Secondary DNS",
                "content": "Enter the information provided by your ISP."
            }, {
                "type": "name",
                "title": "MTU Size",
                "content": "The default and typical MTU (Maximum Transmission Unit) size for most Ethernet networks is 1500 Bytes. It is NOT recommended to change the default MTU size unless required by the ISP."
            }, {
                "type": "title",
                "title": "Internet Connection Type: Dynamic IP"
            }, {
                "type": "paragraph",
                "content": "Select this type if you are provided with a DHCP server connection by the ISP (Internet Service Provider)."
            }, {
                "type": "name",
                "title": "IP Address/Subnet Mask/Default Gateway/Primary DNS/Secondary DNS",
                "content": "These parameters are automatically assigned by the DHCP server from your ISP."
            }, {
                "type": "name",
                "title": "Renew",
                "content": "Click this button to get new IP parameters from the DHCP server."
            }, {
                "type": "name",
                "title": "Release",
                "content": "Click this button to release all IP addresses assigned by the DHCP server."
            }, {
                "type": "name",
                "title": "Use the Following DNS Addresses",
                "content": "If the ISP provides one or two DNS addresses, select this checkbox and enter the Primary DNS and Secondary DNS addresses into the corresponding input fields; otherwise, the DNS addresses will be assigned dynamically by the ISP."
            }, {
                "type": "name",
                "title": "MTU Size",
                "content": "The default and typical MTU (Maximum Transmission Unit) size for most Ethernet networks is 1500 Bytes. It is NOT recommended to change the default MTU size unless required by the ISP."
            }, {
                "type": "name",
                "title": "Host Name",
                "content": "Enter a value into this field to specify the host name of the router."
            }, {
                "type": "name",
                "title": "Get IP Using Unicast DHCP",
                "content": "Select this checkbox if your ISP’s DHCP server does not support broadcast applications and you cannot get the IP address dynamically."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "If you encounter “Address not found” errors after entering the DNS addresses, it is likely that your DNS servers are setup incorrectly; contact the ISP for assistance."
            }, {
                "type": "title",
                "title": "Internet Connection Type: PPPoE"
            }, {
                "type": "paragraph",
                "content": "Select this type if you use DSL (Digital Subscriber Line) service and are provided with a username and password by the ISP."
            }, {
                "type": "name",
                "title": "Username/Password",
                "content": "Enter the username and password provided by your ISP. These fields are case-sensitive."
            }, {
                "type": "name",
                "title": "Internet IP Address/Primary DNS/Secondary DNS",
                "content": "These parameters are automatically assigned by the DHCP server on your ISP."
            }, {
                "type": "name",
                "title": "Secondary Connection (None, Dynamic IP, Static IP)",
                "children": [{
                    "type": "name",
                    "title": "None",
                    "content": "Select if no secondary connection is provided."
                }, {
                    "type": "name",
                    "title": "Dynamic IP",
                    "content": "Select if the IP address and Subnet Mask are assigned automatically by the ISP.",
                    "children": [{
                        "type": "name",
                        "title": "Renew",
                        "content": "Click this button to renew the IP parameters from your ISP."
                    }, {
                        "type": "name",
                        "title": "Release",
                        "content": "Click this button to release the assigned IP parameters."
                    }]
                }, {
                    "type": "name",
                    "title": "Static IP",
                    "content": "Select if the IP address, Subnet Mask, Gateway, and DNS addresses are provided by the ISP, and enter these information into the corresponding fields."
                }]
            }, {
                "type": "name",
                "title": "MTU Size",
                "content": "The typical MTU (Maximum Transmission Unit) size for Ethernet networks is 1480 Bytes.",
                "children": [{
                    "type": "paragraph",
                    "title": "Note",
                    "content": "In a rare case, your ISP may require you to adjust the MTU size for better network performance. You should not change the value unless it is absolutely necessary."
                }]
            }, {
                "type": "name",
                "title": "Service Name/Access Concentrator Name",
                "content": "By default, the Service Name and Access Concentrator (AC) Name are left blank. These fields should not be configured unless required by your ISP."
            }, {
                "type": "name",
                "title": "Detect Online Interval",
                "content": "Enter a time interval value between 0 and 120 (in seconds) for which the router detects Access Concentrator online at every interval. The default value is 0, meaning no detection."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "If your ISP provides a specific (fixed) IP address, select Use the Following IP Address and enter the IP address in the field; otherwise select Get Dynamically from ISP to obtain a server-assigned IP address automatically."
            }, {
                "type": "name",
                "title": "DNS Address/Primary DNS/Secondary DNS",
                "content": "If your ISP provides the specific (fixed) DNS IP addresses, select Use the Following DNS Address and enter the address(es) into the Primary DNS and Secondary DNS fields respectively; otherwise select Get Dynamically from ISP to obtain the server-assigned DNS IP address(es) automatically."
            }, {
                "type": "name",
                "title": "Connection Mode",
                "content": "Select an appropriate connection mode that determines how to connect to the Internet.",
                "children": [{
                    "type": "name",
                    "title": "Auto",
                    "content": "In this mode, the Internet connection reconnects automatically any time it gets disconnected."
                }, {
                    "type": "name",
                    "title": "On Demand",
                    "content": "In this mode, the Internet connection will be terminated automatically after a specified time of inactivity (Max Idle Time) has elapsed. The connection is re-established when you attempt to access the Internet again."
                }, {
                    "type": "name",
                    "title": "Time-Based",
                    "content": "In this mode, the Internet connection is only established in a specific timeframe. If this option is selected, enter the start time and end time; both are in HH:MM format."
                }, {
                    "type": "name",
                    "title": "Manually",
                    "content": "In this mode, the Internet connection is controlled manually by clicking the Connect or Disconnect button.This mode also supports the Max Idle Time function. Enter a maximum time (in minutes) the Internet connection can be inactive before it is terminated into the Max Idle Time field. The default value is 15 minutes. If you want the Internet connection remains active at all time, enter 0 (zero)."
                }, {
                    "type": "paragraph",
                    "title": "Note",
                    "content": "The Time-Based connection mode will only take effect once the System Time on the Advanced → System Tools → Time Settings page is configured."
                }]
            }, {
                "type": "title",
                "title": "Internet Connection Type: BigPond Cable"
            }, {
                "type": "paragraph",
                "content": "Select this type if your ISP provides Bigpond Cable connection."
            }, {
                "type": "name",
                "title": "Username/Password",
                "content": "Enter the username and password provided by your ISP. These fields are case-sensitive."
            }, {
                "type": "name",
                "title": "Auth. Server",
                "content": "Enter the authenticating server’s IP address or hostname."
            }, {
                "type": "name",
                "title": "Auth. Domain",
                "content": "Enter the server's domain name suffix (based on your location). For example, nsw.bigpond.net.au for NSW/ACT, vic.bigpond.net.au for VIC/TAS/WA/SA/NT, or qld.bigpond.net.au for QLD."
            }, {
                "type": "name",
                "title": "MTU Size",
                "content": "The default and typical MTU (Maximum Transmission Unit) size for most Ethernet networks is 1500 Bytes. It is not recommended to change the default MTU size unless required by the ISP."
            }, {
                "type": "name",
                "title": "Connection Mode",
                "content": "Select an appropriate connection mode that determines how to connect to the Internet.",
                "children": [{
                    "type": "name",
                    "title": "Auto",
                    "content": "In this mode, the Internet connection reconnects automatically any time it gets disconnected."
                }, {
                    "type": "name",
                    "title": "On Demand",
                    "content": "In this mode, the Internet connection will be terminated automatically after a specified time of inactivity (Max Idle Time) has elapsed. The connection is re-established when you attempt to access the Internet again."
                }, {
                    "type": "name",
                    "title": "Manually",
                    "content": "In this mode, the Internet connection is controlled manually by clicking the Connect or Disconnect button.This mode also supports the Max Idle Time function. Enter a maximum time (in minutes) the Internet connection can be inactive before it is terminated into the Max Idle Time field. The default value is 15 minutes. If you want the Internet connection remains active at all time, enter 0 (zero)."
                }]
            }, {
                "type": "title",
                "title": "Internet Connection Type: L2TP/PPTP"
            }, {
                "type": "paragraph",
                "content": "Select this type if you connect to an L2TP/PPTP VPN Server and are provided with a username, password, and IP Address/Domain Name of the server by the ISP."
            }, {
                "type": "paragraph",
                "content": "You connect to a PPTP VPN Server and are provided with a username, password, and IP Address/Domain Name of the server by the ISP."
            }, {
                "type": "name",
                "title": "Username/Password",
                "content": "Enter the username and password provided by your ISP. These fields are case-sensitive."
            }, {
                "type": "name",
                "title": "Internet IP Address/Primary DNS/Secondary DNS",
                "content": "These parameters will be automatically assigned by the DHCP server from your ISP."
            }, {
                "type": "name",
                "title": "Secondary Connection (Dynamic IP or Static IP)",
                "children": [{
                    "type": "name",
                    "title": "Dynamic IP",
                    "content": "Select if the IP address and Subnet Mask are assigned automatically by the ISP.",
                    "children": [{
                        "type": "name",
                        "title": "Renew",
                        "content": "Click this button to renew the IP parameters from your ISP."
                    }, {
                        "type": "name",
                        "title": "Release",
                        "content": "Click this button to release the assigned IP parameters."
                    }]
                }, {
                    "type": "name",
                    "title": "Static IP",
                    "content": "Select if the IP address, Subnet Mask, Gateway, and DNS addresses are provided by the ISP, and enter these information into the corresponding fields."
                }]
            }, {
                "type": "name",
                "title": "VPN Server IP Address/Domain Name",
                "content": "Enter the VPN server’s IP address or domain name provided by your ISP."
            }, {
                "type": "name",
                "title": "MTU Size",
                "content": "The default and typical MTU (Maximum Transmission Unit) size for most Ethernet networks is 1460 Bytes. It is NOT recommended to change the default MTU size unless required by the ISP."
            }, {
                "type": "name",
                "title": "Connection Mode",
                "content": "Select an appropriate connection mode that determines how to connect to the Internet.",
                "children": [{
                    "type": "name",
                    "title": "Auto",
                    "content": "In this mode, the Internet connection reconnects automatically any time it gets disconnected."
                }, {
                    "type": "name",
                    "title": "On Demand",
                    "content": "In this mode, the Internet connection will be terminated automatically after a specified time of inactivity (Max Idle Time) has elapsed. The connection is re-established when you attempt to access the Internet again."
                }, {
                    "type": "name",
                    "title": "Manually",
                    "content": "In this mode, the Internet connection is controlled manually by clicking the Connect or Disconnect button.This mode also supports the Max Idle Time function. Enter a maximum time (in minutes) the Internet connection can be inactive before it is terminated into the Max Idle Time field. The default value is 15 minutes. If you want the Internet connection remains active at all time, enter 0 (zero)."
                }]
            }, {
                "type": "title",
                "title": "MAC Clone"
            }, {
                "type": "name",
                "title": "Use Default MAC Address",
                "content": "DO NOT change the default MAC address of the router, in case the ISP does not bind the assigned IP address to the MAC address."
            }, {
                "type": "name",
                "title": "Use Current Computer MAC Address",
                "content": "Select to copy the current MAC address of the computer that is connected to the router, in case the ISP binds the assigned IP address to the computer's MAC address."
            }, {
                "type": "name",
                "title": "Use Custom MAC Address",
                "content": "Enter the MAC address manually, in case the ISP binds the assigned IP address to the specific MAC address."
            }]
        },
        "lan": {
            "TITLE": "LAN",
            "CONTENT": [{
                "type": "name",
                "title": "MAC Address",
                "content": "The physical MAC address of the router."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "Displays the default router's IP address (192.168.0.1), which is used to login to the router's web management page, and can be overridden."
            }, {
                "type": "name",
                "title": "Subnet Mask",
                "content": "Select an assigned identifier used by the LAN port to route Internal and External traffic from the drop-down list or enter a new subnet mask in hexadecimal format. The default is 255.255.255.0."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "If the new LAN IP address is not in the same subnet with the old one, the IP Address Pool in the DHCP server will be automatically configured; however, the Virtual Server and DMZ Host will not take effect until they are reconfigured."
            }]
        },
        "iptvSpec": {
            "TITLE": "Settings",
            "CONTENT": [{
                "type": "name",
                "title": "IPTV",
                "content": "Select to enable the IPTV feature."
            }, {
                "type": "name",
                "title": "Mode",
                "content": "Select the appropriate mode according to your ISP. There are six supported IPTV modes:",
                "children": [{
                    "type": "name",
                    "title": "Bridge",
                    "content": " If your ISP is not listed and no other parameters are required, you can simply select this mode and configure the LAN port features of the router.",
                    "children": [{
                        "type": "name",
                        "title": "LAN 1/2/3/4",
                        "content": "Assign your LAN port whether to function as the Internet supplier or as the IPTV supplier."
                    }]
                }, {
                    "type": "name",
                    "title": "Russia",
                    "content": "Select if your ISP is from Russia and the necessary parameters are predetermined, including Internet/IP-Phone/IPTV VLAN IDs and Priority, and LAN (1/2/3/4) port features.",
                    "children": [{
                        "type": "name",
                        "title": "IPTV Multicast Vlan ID/Priority",
                        "content": "You can enable the IPTV multicast feature as desired, and configure the VLAN ID and Priority according to your ISP."
                    }]
                }, {
                    "type": "name",
                    "title": "Singapore-ExStream",
                    "content": "Select if your ISP is ExStream from Singapore and the necessary parameters are predetermined, including Internet/IPTV Vlan IDs and priority, and LAN (1/2/3/4)port features."
                }, {
                    "type": "name",
                    "title": "Malaysia-Unifi",
                    "content": "Select if your ISP is Unifi from Malaysia and the necessary parameters are predetermined, including Internet/IPTV Vlan IDs and priority, and LAN (1/2/3/4) port features."
                }, {
                    "type": "name",
                    "title": "Malaysia-Maxis",
                    "content": "Select if your ISP is Maxis from Malaysia and the necessary parameters are predetermined, including Internet/IP-Phone/IPTV VLAN IDs and Priority, and LAN (1/2/3/4) port features."
                }, {
                    "type": "name",
                    "title": "Custom",
                    "content": "Select if your ISP is not listed but provides the necessary parameters, including Internet/IP-Phone/IPTV VLAN IDs and Priority, and LAN (1/2/3/4) port features.",
                    "children": [{
                        "type": "name",
                        "title": "Internet/IP-Phone/IPTV Vlan ID/Priority",
                        "content": "Configure the VLAN IDs as provided by your ISP."
                    }, {
                        "type": "name",
                        "title": "802.11Q Tag",
                        "content": "Select whether to tag the Internet packets with 802.11Q."
                    }, {
                        "type": "name",
                        "title": "LAN 1/2/3/4",
                        "content": "Assign your LAN port to whether function as the Internet supplier or as the IPTV supplier."
                    }, {
                        "type": "name",
                        "title": "IPTV Multicast Vlan ID/Priority",
                        "content": "You can enable the IPTV multicast feature as desired, and configure the VLAN ID and Priority according to your ISP."
                    }]
                }]
            }, {
                "type": "name",
                "title": "IGMP Proxy",
                "content": "Select the IGMP (Internet Group Management Protocol) Proxy version, either V2 or V3, according to your ISP."
            }]
        },
        "dhcp": {
            "TITLE": "Settings",
            "CONTENT": [{
                "type": "name",
                "title": "DHCP Server",
                "content": "By default, the DHCP (Dynamic Host Configuration Protocol) Server is enabled; it dynamically assigns TCP/IP parameters to client devices from the IP Address Pool. DO NOT disable the DHCP Server unless you have another DHCP server or you wish to manually assign the TCP/IP parameters to every client device on your network."
            }, {
                "type": "name",
                "title": "IP Address Pool",
                "content": "Enter the range of IP addresses that can be leased to the clients. By default, the starting IP address is 192.168.0.100 and the ending is 192.168.0.199."
            }, {
                "type": "name",
                "title": "Address Lease Time",
                "content": "Enter the time duration that an IP address is leased to the client between 2 and 2880 minutes. The default is 120 minutes."
            }, {
                "type": "name",
                "title": "Default Gateway",
                "content": "Enter the LAN IP address. The default is 192.168.0.1. (Optional)"
            }, {
                "type": "name",
                "title": "Primary DNS/Secondary DNS",
                "content": "Enter these parameters as provided by your ISP. (Optional)",
                "children": [{
                    "type": "paragraph",
                    "title": "Note",
                    "content": "If you encounter “Address not found” errors after entering the DNS addresses, it is likely that your DNS servers are setup incorrectly; contact your ISP for assistance."
                }]
            }, {
                "type": "title",
                "title": "DHCP Client List"
            }, {
                "type": "name",
                "title": "Client Number",
                "content": "Displays the index number of the associated DHCP client."
            }, {
                "type": "name",
                "title": "Client Name",
                "content": "Displays the name of the DHCP client."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address."
            }, {
                "type": "name",
                "title": "Assigned IP Address",
                "content": "Displays the allocated IP address to the client by the DHCP server."
            }, {
                "type": "name",
                "title": "Lease Time",
                "content": "Displays the time duration of the IP address that has been leased to the client."
            }, {
                "type": "name",
                "title": "Refresh",
                "content": "Click to update the DHCP Client List."
            }, {
                "type": "title",
                "title": "Address Reservation"
            }, {
                "type": "paragraph",
                "content": "You can manually reserve an IP address for a client that is connected to the router. Once reserved, the IP address will only be assigned to the same client by the DHCP server."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address of the client with DHCP reserved IP address."
            }, {
                "type": "name",
                "title": "Reserved IP Address",
                "content": "Displays the reserved IP address of the client."
            }, {
                "type": "name",
                "title": "Description",
                "content": "Displays a description of the client device."
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays the current status (enabled or disabled) of the client device."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Modify or Delete the corresponding client."
            }, {
                "type": "note",
                "title": "To reserve an IP address",
                "content": ["Click Add.", "Enter the MAC address of your desired client.", "Enter the IP address that you want to reserve for the client.", "Enter a description for the client.", "Select Enable.", "Click OK."]
            }, {
                "type": "paragraph",
                "title": "To modify or delete an existing client",
                "content": "In the table, click the Edit icon or the Delete icon that corresponds to the client that you wish to modify or delete."
            }]
        },
        "ddns": {
            "TITLE": "Dynamic DNS",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Dynamic DNS allows you to assign a fixed host and domain name to a dynamic Internet IP address. It is useful when you are hosting your own website, FTP server, or another server behind the router. First, you need to sign up with a DDNS service provider such as www.dyndns.com."
            }, {
                "type": "note",
                "title": "To set up a Dynamic DNS",
                "content": ["Select your DDNS service provider.", "Enter the Username and Password of your DDNS account.", "Enter the Domain Name you received from the DDNS service provider.", "Select your Update Interval from the drop-down list.", "Click Login and Save."]
            }, {
                "type": "paragraph",
                "content": "To switch between accounts, you must first Logout the current account and then Login another account with the new username and password."
            }]
        },
        "route": {
            "TITLE": "Static Routing",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Static routing is used to predetermine a fixed route for the network information packets to reach a specific host or network."
            }, {
                "type": "note",
                "title": "To set up a Static Routing",
                "content": ["Click Add.", "Destination Network - Enter an IP address in hexadecimal to assign the static route for this entry.", "Subnet Mask - Enter a subnet mask in hexadecimal format to determine the network portion and host portion of the IP address.", "Default Gateway - Enter a gateway IP address in hexadecimal format to connect the router to the network or host.", "Interface - Select LAN or WAN to specify the type of the Destination Network.", "Description - Enter a brief description for this entry.", "Select Enable.", "Click OK."]
            }, {
                "type": "paragraph",
                "title": "To modify or delete an existing entry",
                "content": "In the table, click the Edit icon or the Delete icon that corresponds to the entry that you wish to modify or delete."
            }, {
                "type": "title",
                "title": "System Routing Table"
            }, {
                "type": "paragraph",
                "content": "System Routing Table displays all valid route entries that are currently in use."
            }, {
                "type": "paragraph",
                "content": "Click Refresh to update the Routing table."
            }]
        },
        "wirelessSettings": {
            "TITLE": "Settings",
            "CONTENT": [{
                "type": "name",
                "title": "Region",
                "content": "Select your region from the drop-down menu. If your country or region is not listed, it may be restricted to use the wireless radio in your location."
            }, {
                "type": "paragraph",
                "content": "Click Save to save all your settings."
            }, {
                "type": "title",
                "title": "Wireless 2.4GHz"
            }, {
                "type": "name",
                "title": "Enable Wireless Radio",
                "content": "Select this checkbox to enable the 2.4GHz wireless radio frequency."
            }, {
                "type": "name",
                "title": "Network Name (SSID)",
                "content": "You can leave the default Network Name (SSID) as it is, or enter a new name (up to 32 characters). This field is case-sensitive."
            }, {
                "type": "name",
                "title": "Hide SSID",
                "content": "Select this checkbox if you want to hide the 2.4GHz network name (SSID) from the Wi-Fi network list."
            }, {
                "type": "name",
                "title": "Security",
                "content": "Select one of the following security options:",
                "children": [{
                    "type": "name",
                    "title": "No Security",
                    "content": "Select this option to disable the wireless security. It is highly recommended that you enable the wireless security to protect your wireless network from unauthorized access."
                }, {
                    "type": "name",
                    "title": "WPA/WPA2-Personal",
                    "content": "Select this option to enable the standard authentication method based on a Pre-shared Key (PSK), also called passphrase. This option is the default and recommended. If selected, configure the following.",
                    "children": [{
                        "type": "name",
                        "title": "Version",
                        "content": "Select a security version for your wireless network.",
                        "children": [{
                            "type": "name",
                            "title": "Auto",
                            "content": "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
                        }, {
                            "type": "name",
                            "title": "WPA-PSK",
                            "content": "This option supports only TKIP encryption that provides a good level of security."
                        }, {
                            "type": "name",
                            "title": "WPA2-PSK",
                            "content": "This option support AES encryption that provides a better level of security than WPA-PSK and is recommended."
                        }]
                    }, {
                        "type": "name",
                        "title": "Encryption",
                        "content": "Select a security encryption type: TKIP(Temporal Key Integrity Protocol), AES(Advanced Encryption Standard), or Auto (for both TKIP and AES)."
                    }, {
                        "type": "name",
                        "title": "Password",
                        "content": "Enter a wireless password between 8 and 63 ASCII characters, or between 8 and 64 hexadecimal characters into this field."
                    }]
                }, {
                    "type": "name",
                    "title": "WPA/WPA2-Enterprise",
                    "content": "Select this option to enable the more advanced authentication method using a RADIUS (Remote Authentication Dial In User Service) server. If selected, WPS function will be disabled.",
                    "children": [{
                        "type": "name",
                        "title": "Version",
                        "content": "Select a security version for your wireless network.",
                        "children": [{
                            "type": "name",
                            "title": "Auto",
                            "content": "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
                        }, {
                            "type": "name",
                            "title": "WPA-PSK",
                            "content": "This option supports only TKIP encryption that provides a good level of security."
                        }, {
                            "type": "name",
                            "title": "WPA2-PSK",
                            "content": "This option support AES encryption that provides a better level of security than WPA-PSK and is recommended."
                        }]
                    }, {
                        "type": "name",
                        "title": "Encryption",
                        "content": "Select a security encryption type: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), or Auto (for both TKIP and AES). It is NOT recommended to use the TKIP encryption if the router operates in 802.11n mode, because TKIP is not supported by 802.11n specification. If TKIP is selected, WPS function will be disabled."
                    }, {
                        "type": "name",
                        "title": "RADIUS Server IP",
                        "content": "Enter the IP address of the RADIUS server."
                    }, {
                        "type": "name",
                        "title": "RADIUS Port",
                        "content": "Enter the port number of the RADIUS server. The default is 1812."
                    }, {
                        "type": "name",
                        "title": "RADIUS Password",
                        "content": "Enter the shared password of the RADIUS server."
                    }]
                }]
            }, {
                "type": "name",
                "title": "WEP",
                "content": "Select this option to enable basic authentication method if any version of your client devices can only access the wireless using WEP (Wired Equivalent Privacy).",
                "children": [{
                    "type": "name",
                    "title": "Type",
                    "content": "Select an authentication type for your wireless network. The default is Auto, which automatically chooses Open System or Shared Key based on the capability and access request of the wireless client."
                }, {
                    "type": "name",
                    "title": "WEP Key Format",
                    "content": "Either use ASCII format or select Hexadecimal. ASCII format is a combination of alphabetic and numeric characters.Hexadecimal format is a combination of the number (0-9) and letters (A-F, a-f)."
                }, {
                    "type": "name",
                    "title": "Key Type",
                    "content": "Select a WEP key length.",
                    "children": [{
                        "type": "name",
                        "title": "64-bit",
                        "content": "Allows you to enter 10 hexadecimal digits (0-9, A-F, a-f) or 5 ASCII characters into the WEP Value field."
                    }, {
                        "type": "name",
                        "title": "128-bit",
                        "content": "Allows you to enter 26 hexadecimal digits (0-9, A-F, a-f) or 13 ASCII characters into the WEP Value field."
                    }]
                }, {
                    "type": "name",
                    "title": "Key Value",
                    "content": "Enter one or more WEP keys into the respective fields."
                }]
            }, {
                "type": "name",
                "title": "Mode",
                "content": "Select a transmission mixed mode."
            }, {
                "type": "name",
                "title": "Channel Width",
                "content": "Select a channel width (bandwidth) for the 2.4GHz wireless network."
            }, {
                "type": "name",
                "title": "Channel",
                "content": "Select an operating channel for the 2.4GHz wireless network. Auto is selected by default; which the router finds the best channel available automatically. It is recommended to leave the channel to Auto, if you are not experiencing the intermittent wireless connection issue."
            }, {
                "type": "name",
                "title": "Transmit Power",
                "content": "Select either High, Middle, or Low to specify the data transmit power.The default and recommended setting is High."
            }, {
                "type": "paragraph",
                "content": "Click Save to save all your settings."
            }, {
                "type": "title",
                "title": "Wireless 5GHz"
            }, {
                "type": "name",
                "title": "Enable Wireless Radio",
                "content": "Select this checkbox to enable the 5GHz wireless radio frequency."
            }, {
                "type": "name",
                "title": "Network Name (SSID)",
                "content": "You can leave the default Network Name (SSID) as it is or enter a new name (up to 32 characters). This field is case-sensitive."
            }, {
                "type": "name",
                "title": "Hide SSID",
                "content": "Select this checkbox if you want to hide the 5GHz network name (SSID) from the Wi-Fi network list."
            }, {
                "type": "name",
                "title": "Security",
                "content": "Select one of the following security options:",
                "children": [{
                    "type": "name",
                    "title": "No Security",
                    "content": "Select this option to disable the wireless security. It is highly recommended that you enable the wireless security to protect your wireless network from unauthorized access."
                }, {
                    "type": "name",
                    "title": "WPA/WPA2-Personal",
                    "content": "Select this option to enable the standard authentication method based on a Pre-shared Key (PSK), also called passphrase. This option is the default and recommended. If selected, configure the following.",
                    "children": [{
                        "type": "name",
                        "title": "Version",
                        "content": "Select a security version for your wireless network.",
                        "children": [{
                            "type": "name",
                            "title": "Auto",
                            "content": "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
                        }, {
                            "type": "name",
                            "title": "WPA-PSK",
                            "content": "This option supports only TKIP encryption that provides a good level of security."
                        }, {
                            "type": "name",
                            "title": "WPA2-PSK",
                            "content": "This option support AES encryption that provides a better level of security than WPA-PSK and is recommended."
                        }]
                    }, {
                        "type": "name",
                        "title": "Encryption",
                        "content": "Select a security encryption type: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), or Auto (for both TKIP and AES). It is NOT recommended to use the TKIP encryption if the router operates in 802.11n mode, because TKIP is not supported by 802.11n specification. If TKIP is selected, WPS function will be disabled."
                    }, {
                        "type": "name",
                        "title": "Password",
                        "content": "Enter a wireless password between 8 and 63 ASCII characters, or between 8 and 64 hexadecimal characters into this field."
                    }]
                }, {
                    "type": "name",
                    "title": "WPA/WPA2-Enterprise",
                    "content": "Select this option to enable the more advanced authentication method using a RADIUS (Remote Authentication Dial In User Service) server. If selected, WPS function will be disabled.",
                    "children": [{
                        "type": "name",
                        "title": "Version",
                        "content": "Select a security version for your wireless network.",
                        "children": [{
                            "type": "name",
                            "title": "Auto",
                            "content": "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
                        }, {
                            "type": "name",
                            "title": "WPA-PSK",
                            "content": "This option supports only TKIP encryption that provides a good level of security."
                        }, {
                            "type": "name",
                            "title": "WPA2-PSK",
                            "content": "This option support AES encryption that provides a better level of security than WPA-PSK and is recommended."
                        }]
                    }, {
                        "type": "name",
                        "title": "Encryption",
                        "content": "Select a security encryption type: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), or Auto (for both TKIP and AES). It is NOT recommended to use the TKIP encryption if the router operates in 802.11n mode, because TKIP is not supported by 802.11n specification. If TKIP is selected, WPS function will be disabled."
                    }, {
                        "type": "name",
                        "title": "RADIUS Server IP",
                        "content": "Enter the IP address of the RADIUS server."
                    }, {
                        "type": "name",
                        "title": "RADIUS Port",
                        "content": "Enter the port number of the RADIUS server. The default is 1812."
                    }, {
                        "type": "name",
                        "title": "RADIUS Password",
                        "content": "Enter the shared password of the RADIUS server."
                    }]
                }, {
                    "type": "name",
                    "title": "WEP",
                    "content": "Select this option to enable basic authentication method if any version of your client devices can only access the wireless using WEP (Wired Equivalent Privacy).",
                    "children": [{
                        "type": "name",
                        "title": "Type",
                        "content": "Select an authentication type for your wireless network. The default is Auto, which automatically chooses Open System or Shared Key based on the capability and access request of the wireless client."
                    }, {
                        "type": "name",
                        "title": "WEP Key Format",
                        "content": "Either use ASCII format or select Hexadecimal. ASCII format is a combination of alphabetic and numeric characters.Hexadecimal format is a combination of the number (0-9) and letters (A-F, a-f)."
                    }, {
                        "type": "name",
                        "title": "Key Type",
                        "content": "Select a WEP key length.",
                        "children": [{
                            "type": "name",
                            "title": "64-bit",
                            "content": "Allows you to enter 10 hexadecimal digits (0-9, A-F, a-f) or 5 ASCII characters into the WEP Value field."
                        }, {
                            "type": "name",
                            "title": "128-bit",
                            "content": "Allows you to enter 26 hexadecimal digits (0-9, A-F, a-f) or 13 ASCII characters into the WEP Value field."
                        }]
                    }, {
                        "type": "name",
                        "title": "Key Value",
                        "content": "Enter one or more WEP keys into the respective fields."
                    }]
                }]
            }, {
                "type": "name",
                "title": "Mode",
                "content": "Select a transmission mixed mode."
            }, {
                "type": "name",
                "title": "Channel Width",
                "content": "Select a channel width (bandwidth) for the 5GHz wireless network."
            }, {
                "type": "name",
                "title": "Channel",
                "content": "Select an operating channel for the 5GHz wireless network. Auto is selected by default; which the router finds the best channel available automatically. It is recommended to leave the channel to Auto, if you are not experiencing the intermittent wireless connection issue."
            }, {
                "type": "name",
                "title": "Transmit Power",
                "content": "Select either High, Middle, or Low to specify the data transmit power.The default and recommended setting is High."
            }, {
                "type": "paragraph",
                "content": "Click Save to save all your settings."
            }]
        },
        "wps": {
            "TITLE": "Router's PIN",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Other devices can connect to this router by WPS with Router's PIN code."
            }, {
                "type": "name",
                "title": "Enable Router's PIN",
                "content": "Toggle On to allow wireless devices to connect to the router using the Router’s PIN (Personal Identification Number)."
            }, {
                "type": "name",
                "title": "Router's PIN",
                "content": "Displays the Router’s PIN code. The default PIN can be found on the label of the router or in the User Guide. Click Generate to generate a new PIN randomly or click Default to restore the current PIN to the factory default PIN."
            }, {
                "type": "title",
                "title": "WPS Wizard"
            }, {
                "type": "paragraph",
                "content": "Select a setup method"
            }, {
                "type": "name",
                "title": "Push Button (Recommended)",
                "content": "Select this setup method to enable the WPS feature to easily connect any WPS-enabled device to your wireless network using the WPS button or virtually using the Connect button."
            }, {
                "type": "name",
                "title": "Pin Number",
                "content": "Select this setup method to add a device manually by entering the wireless device's WPS PIN into the field and click Connect."
            }]
        },
        "macFilter": {
            "TITLE": "",
            "CONTENT": []
        },
        "wirelessStat": {
            "TITLE": "Wireless Stations Online",
            "CONTENT": [{
                "type": "name",
                "title": "Client Number",
                "content": "Displays the index number of the associated wireless client."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address of the associated wireless client."
            }, {
                "type": "name",
                "title": "Connection Type",
                "content": "Displays the wireless frequency band (2.4GHz or 5GHz) of the associated wireless client."
            }, {
                "type": "name",
                "title": "Security",
                "content": "Displays the security type (None, WEP, WPA/WPA2-Personal, or WPA/WPA2-Enterprise) of the associated wireless client."
            }, {
                "type": "name",
                "title": "Received Packets",
                "content": "Displays the number of packets received by the associated wireless client."
            }, {
                "type": "name",
                "title": "Sent Packets",
                "content": "Displays the number of packets sent by the associated wireless client."
            }, {
                "type": "paragraph",
                "content": "Click Refresh to update the information on this page."
            }]
        },
        "wlGuestDulBandAdv": {
            "TITLE": "Settings",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Guest Network allows you to set up a separate network with a separate wireless network name (SSID) and password that guests can use to access your wireless network."
            }, {
                "type": "name",
                "title": "Allow guests to see each other",
                "content": "Select this checkbox to allow the wireless devices on the Guest Network to see each other."
            }, {
                "type": "name",
                "title": "Allow guests to access my local network",
                "content": "Select this checkbox to allow the wireless devices on the Guest Network to access your local network shares and printers."
            }, {
                "type": "paragraph",
                "content": "Click Save to save all your settings."
            }, {
                "type": "title",
                "title": "Wireless 2.4GHz/5GHz"
            }, {
                "type": "name",
                "title": "Enable Guest Network",
                "content": "Select this checkbox to enable the Guest Network feature."
            }, {
                "type": "name",
                "title": "Network Name (SSID)",
                "content": "Either use the default Guest SSID or create a new name (up to 32 characters)."
            }, {
                "type": "name",
                "title": "Hide SSID",
                "content": "Select this checkbox if you want to hide the Guest SSID from the Wi-Fi network list."
            }, {
                "type": "name",
                "title": "Security",
                "content": "Select one of the following security options:",
                "children": [{
                    "type": "name",
                    "title": "No Security",
                    "content": "Select this option to disable the wireless security. It is highly recommended that you enable the wireless security to protect your Guest Network from unauthorized access."
                }, {
                    "type": "name",
                    "title": "WPA/WPA2-Personal",
                    "content": "Select this option to enable the standard authentication method based on a Pre-shared Key (PSK), also called passphrase. If selected, configure the following.",
                    "children": [{
                        "type": "name",
                        "title": "Version",
                        "content": "Select a security version for your Guest Network.",
                        "children": [{
                            "type": "name",
                            "title": "Auto",
                            "content": "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
                        }, {
                            "type": "name",
                            "title": "WPA-PSK",
                            "content": "This option supports only TKIP encryption that provides a good level of security."
                        }, {
                            "type": "name",
                            "title": "WPA2-PSK",
                            "content": "This option support AES encryption that provides a better level of security than WPA-PSK and is recommended."
                        }]
                    }, {
                        "type": "name",
                        "title": "Encryption",
                        "content": "Select a security encryption type: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), or Auto (for both TKIP and AES). It is NOT recommended to use the TKIP encryption if the router operates in 802.11n mode, because TKIP is not supported by 802.11n specification. If TKIP is selected, WPS function will be disabled."
                    }]
                }]
            }, {
                "type": "name",
                "title": "Wireless Password",
                "content": "Create a password between 8 and 63 ASCII characters, or between 8 and 64 hexadecimal characters (0-9, a-f, A-F), to secure the Guest network."
            }, {
                "type": "paragraph",
                "content": "Click Save to save all your settings."
            }]
        },
        "alg": {
            "TITLE": "Application Layer Gateway(ALG)",
            "CONTENT": [{
                "type": "paragraph",
                "content": "ALG allows customized Network Address Translation (NAT) traversal filters to be plugged into the gateway to support address and port translation for certain application layer \"control/data\" protocols: FTP, TFTP, H323 etc. Enabling ALG is recommended."
            }, {
                "type": "name",
                "title": "Enable FTP ALG",
                "content": "If selected, it allows FTP(File Transfer Protocol) clients and servers to transfer data via NAT."
            }, {
                "type": "name",
                "title": "Enable TFTP ALG",
                "content": "If selected, it allows TFTP(Trivial File Transfer Protocol) clients and servers to transfer data via NAT."
            }, {
                "type": "name",
                "title": "Enable H323 ALG",
                "content": "If selected, it allows Microsoft NetMeeting clients to communicate via NAT."
            }, {
                "type": "name",
                "title": "Enable RTSP ALG",
                "content": "If selected, it allows media player clients to communicate with streaming media servers via NAT."
            }, {
                "type": "name",
                "title": "Enable PPTP Passthrough",
                "content": "If selected, it allows Point-to-Point sessions to be tunneled through an IP network and passed through the router."
            }, {
                "type": "name",
                "title": "Enable L2TP Passthrough",
                "content": "If selected, it allows Layer 2 Point-to-Point sessions to be tunneled through an IP network and passed through the router."
            }, {
                "type": "name",
                "title": "Enable IPSec Passthrough",
                "content": "If selected, it allows Internet Protocol security (IPSec) to be tunneled through an IP network and passed through the router. IPSec uses crytographic security services to ensure private and secure communications over IP networks."
            }, {
                "type": "paragraph",
                "content": "Click Save to save all your settings."
            }]
        },
        "virtualServer": {
            "TITLE": "Virtual Servers",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Virtual Servers are used to set up public services on your local network. A virtual server is defined as an external port, and all requests from the Internet to this external port will be redirected to a designated computer, which must be configured with a static or reserved IP address."
            }, {
                "type": "name",
                "title": "Service Type",
                "content": "Displays the name of your virtual server."
            }, {
                "type": "name",
                "title": "External Port",
                "content": "Displays the port number or a range of ports used by the virtual server."
            }, {
                "type": "name",
                "title": "Internal IP",
                "content": "Displays the IP address of the computer running the service application."
            }, {
                "type": "name",
                "title": "Internal Port",
                "content": "Displays the port number of computer running the service application."
            }, {
                "type": "name",
                "title": "Protocol",
                "content": "Displays the protocol used for the service application: TCP, UDP, or All (All protocols supported by the router)."
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays the current status (enabled or disabled) of the specific filtering rule."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Modify or Delete the corresponding rule."
            }, {
                "type": "note",
                "title": "To set up a Virtual Server rule",
                "content": ["Click Add.", "Click View Existing Services to select a service from the list to automatically populate the appropriate port number in the External Port and Internal Port fields. If the service is not listed, enter the external port number (e.g. 21) or a range of ports (e.g. 21-25). Leave the Internal Port blank if it is the same as the External Port or enter a specific port number (e.g. 21) if the External Port is a single port. Enter the IP address of the computer running the service application in the dotted decimal format into the Internal IP field.", "Select a protocol for the service application: TCP, UDP, or All from the Protocol drop-down list.", "Select Enable.", "Click OK"]
            }, {
                "type": "paragraph",
                "title": "To modify or delete a Virtual Server rule",
                "content": "Click the Modify icon or the Trashicon that corresponds to the rule that you wish to modify or delete."
            }, {
                "type": "paragraph",
                "title": "To delete multiple rules",
                "content": "Select all the entries that you wish to delete, click Delete above the table."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "If your local host device is hosting more than one type of available services, you need to create a rule for each service."
            }]
        },
        "portTrigger": {
            "TITLE": "Port Triggering",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Port Triggering is used to forward traffic on a certain port to specific server on the network."
            }, {
                "type": "name",
                "title": "Application",
                "content": "Displays the name of the application."
            }, {
                "type": "name",
                "title": "Triggering Port",
                "content": "Displays the outgoing traffic port used to trigger a filtering rule of an outgoing connection."
            }, {
                "type": "name",
                "title": "Trigger Protocol",
                "content": "Displays the protocol used for Triggering Port. TCP, UDP, or All (All protocols supported by the router)."
            }, {
                "type": "name",
                "title": "External Ports",
                "content": "Displays the port or port range used by the remote system. A response using one of these ports will be forwarded to the PC which triggers this rule. You can input at most 5 groups of ports (or port sections). Every group of ports must be separated with “,” (commas), for example, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
            }, {
                "type": "name",
                "title": "External Protocol",
                "content": "Displays the protocol used for Incoming Port: TCP, UDP, or ALL (All protocols supported by the router)."
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays the current status (enabled or disabled) of the specific filtering rule."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Modify or Delete and corresponding rule."
            }, {
                "type": "note",
                "title": "To set up a Port Triggering rule",
                "content": [{
                    "type": "note",
                    "title": "Note",
                    "content": "Each rule can only be used by one host at a time."
                }, "Click Add.", {
                    "content": "2. Click View Existing Applicationsto select an application from the list to automatically populate the default values into the appropriate fields. If you want to add an unlisted application, manually enter the Application, Triggering Port, Triggering Protocol, External Port and External Protocol.",
                    "children": [{
                        "type": "note",
                        "title": "Note",
                        "content": "Rules cannot have any port ranges overlap each other (e.g. Rule 1 has the port range 4200-4205, which means Rule 2 cannot have port range from 4203-4206)."
                    }]
                }, "Select Enable.", "Click OK."]
            }, {
                "type": "paragraph",
                "title": "To modify or delete a Port Triggering rule",
                "content": "In the table, click the Modify icon or the Trashicon that corresponds to the rule that you wish to modify or delete."
            }, {
                "type": "paragraph",
                "title": "To delete multiple Port Triggering rules",
                "content": "In the table, select all rules that you wish to delete, click Delete above the table."
            }]
        },
        "dmz": {
            "TITLE": "DMZ",
            "CONTENT": [{
                "type": "paragraph",
                "content": "The DMZ (Demilitarized Zone) host feature allows a local host to be exposed to the Internet for a special-purpose service, such as Internet gaming or video conferencing. Basically, the DMZ allows a single computer on your LAN to open all its ports. This computer needs to be configured with a static IP address and have its DHCP client function disabled."
            }, {
                "type": "note",
                "title": "To assign a computer or server to be a DMZ server",
                "content": ["Click Enable DMZ.", "In the DMZ Host IP Address field, enter the IP Address of a local computer to set up as the DMZ host.", "Click Save."]
            }]
        },
        "upnp": {
            "TITLE": "UPnP",
            "CONTENT": [{
                "type": "paragraph",
                "content": "By default, the Universal Plug-and-Play (UPnP) feature is enabled to allow devices, such as computers and Internet appliances to automatically discover and communicate with each other on the local network."
            }, {
                "type": "paragraph",
                "content": "The UPnP Service List displays the UPnP device information."
            }, {
                "type": "name",
                "title": "Service Description",
                "content": "Displays a brief description of the local host that initiates the UPnP request."
            }, {
                "type": "name",
                "title": "External Port",
                "content": "Displays the external port that is opened by the local host."
            }, {
                "type": "name",
                "title": "Protocol",
                "content": "Displays the network protocol type that is used by the local host."
            }, {
                "type": "name",
                "title": "Internal Port",
                "content": "Displays the internal port that is opened by the local host."
            }, {
                "type": "name",
                "title": "Internal IP Address",
                "content": "Displays the IP address of the local host."
            }, {
                "type": "paragraph",
                "content": "Click Refresh to update the UPnP Server List."
            }]
        },
        "diskSettings": {
            "TITLE": "Device Settings",
            "CONTENT": [{
                "type": "paragraph",
                "content": "The Device Settings page displays the related information of any connected USB storage device via the USB port."
            }, {
                "type": "name",
                "title": "Scan",
                "content": "Usually, the router automatically detects any newly attached device. If not,click this button to scan for any new connected device and refresh the page with the updated information."
            }, {
                "type": "name",
                "title": "Volume",
                "content": "Displays the name of the USB volume."
            }, {
                "type": "name",
                "title": "Capacity",
                "content": "Displays the total storage capacity of the USB."
            }, {
                "type": "name",
                "title": "Free Space",
                "content": "Displays the current available free storage space."
            }, {
                "type": "name",
                "title": "Safely Remove",
                "content": "Click this button to safely unmount the USB storage device before physically disconnecting it from the router."
            }, {
                "type": "paragraph",
                "content": "Please note that the Safely Remove button only appears when there is a USB storage device connected to the router, and you will not able to unmounts the USB device while the current volume is busy."
            }, {
                "type": "name",
                "title": "Active",
                "content": "This checkbox only appears when there is a USB storage device connected to the router. Select to enable file sharing of the USB device."
            }, {
                "type": "note",
                "title": "To set up a file server",
                "content": ["Attach the USB storage device to the USB port of the router using a USB cable.", "The newly attached USB device should be automatically detected by the router and displayed the information under the Device Settings section. If not, click Scan.", "Select Active to enable file sharing."]
            }]
        },
        "folderSharing": {
            "TITLE": "Sharing Account",
            "CONTENT": [{
                "type": "name",
                "title": "Account",
                "content": "You can either select to Use Default Account to login to the shared files and folders or Use New Account and enter the following to create a new user account."
            }, {
                "type": "name",
                "title": "Username/Password",
                "content": "Enter an alphanumeric or under line string of up to 15 characters in length. The username must start with an alphabet character. These fields are case-sensitive."
            }, {
                "type": "name",
                "title": "Confirm Password",
                "content": "Re-enter the password to confirm there is no typo. This field is also case-sensitive."
            }, {
                "type": "paragraph",
                "content": "Click Save to save the new user account."
            }, {
                "type": "title",
                "title": "Sharing Settings"
            }, {
                "type": "name",
                "title": "Network/Media Server Name",
                "content": "Displays the name used to access the connected USB storage device."
            }, {
                "type": "name",
                "title": "Enable",
                "content": "Select to enable the access method."
            }, {
                "type": "name",
                "title": "Access Method",
                "content": "There are three access methods to allow access to the attached USB storage device. You can choose one or more access methods by selecting the corresponding checkbox.",
                "children": [{
                    "type": "name",
                    "title": "Network Neighborhood",
                    "content": "If enabled, users on your network can access the USB storage device using an assigned IP address (e.g. \\\\192.168.0.1). This method is enabled by default."
                }, {
                    "type": "name",
                    "title": "FTP",
                    "content": "If enabled, the FTP clients on your local network can access the USB storage device using the assigned IP address, followed by the FTP server's port number (e.g. ftp://192.168.0.1:21)."
                }, {
                    "type": "name",
                    "title": "FTP (Via Internet)",
                    "content": " If enabled, users can remotely access the USB storage drive through FTP over the Internet. This feature supports both downloading and uploading files. To change FTP server's port number, enter a port number and click Save to apply the changes."
                }]
            }, {
                "type": "name",
                "title": "Link",
                "content": "Displays the address used to access the shared USB storage device."
            }, {
                "type": "name",
                "title": "Port",
                "content": "Displays the port number of the FTP server."
            }, {
                "type": "title",
                "title": "Folder Sharing"
            }, {
                "type": "name",
                "title": "Sharing All",
                "content": "Toggle On to share all files and folders or Off to only share the selected folders."
            }, {
                "type": "name",
                "title": "Enable Authentication",
                "content": "It is strongly recommended to enable authentication to require users to enter the valid username and password to access the sharing folders."
            }, {
                "type": "name",
                "title": "Folder Name",
                "content": "Displays the name of the shared folder."
            }, {
                "type": "name",
                "title": "Folder Path",
                "content": "Displays the path to the shared folder."
            }, {
                "type": "name",
                "title": "Media Sharing",
                "content": "Indicates whether the shared folder is allowed for media sharing or not."
            }, {
                "type": "name",
                "title": "Volume Name",
                "content": "Displays the name of the shared volume."
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays the status of the shared folder by the light bulb indicator. Green (ON) is enabled and Grey (OFF) is disabled. You can enable or disable sharing by clicking the bulb."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Modify or Delete the corresponding shared folder."
            }, {
                "type": "name",
                "title": "Browse",
                "content": "Click to search for a sharing folder."
            }, {
                "type": "name",
                "title": "Allow Guest Network Access",
                "content": "Select to allow clients on Guest Network to access the shared folders."
            }, {
                "type": "name",
                "title": "Enable Authentication",
                "content": "Select to require users to access the shared folders with a valid username and password."
            }, {
                "type": "name",
                "title": "Enable Write Access",
                "content": "Select to allow users to make changes to the folder content."
            }, {
                "type": "name",
                "title": "Enable Media Sharing",
                "content": "Select to enable media sharing."
            }]
        },
        "trafficCtrl": {
            "TITLE": "",
            "CONTENT": []
        },
        "accessControl": {
            "TITLE": "Access Control",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Access Control is used to allow or block specific computers and other devices from accessing your network. When a device is blocked, it is able to get an IP address from the router, but unable to communicate with other devices or connect to the Internet."
            }, {
                "type": "paragraph",
                "content": "To use the Access Control, enable this feature and specify a black or white list. If the Access Control is disabled (Off), all devices, including the blacklisted ones, are allowed to connect."
            }, {
                "type": "title",
                "title": "Access Mode"
            }, {
                "type": "name",
                "title": "Blacklist",
                "content": "Only the devices on the Blacklist will be denied to access your network."
            }, {
                "type": "name",
                "title": "Whitelist",
                "content": "Only the devices on the Whitelist will be allowed to access your network."
            }, {
                "type": "title",
                "title": "Devices Online"
            }, {
                "type": "name",
                "title": "Device Name",
                "content": "Displays the name of the connected device."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "Displays the IP address of the connected device."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address of the connected device."
            }, {
                "type": "name",
                "title": "Connection Type",
                "content": "Displays the connect type of the connected device."
            }, {
                "type": "paragraph",
                "title": "To block a device",
                "content": "In the Devices Online table, click the Block icon in the Modify column that corresponds to the device that you wish to block."
            }, {
                "type": "paragraph",
                "title": "To block multiple devices",
                "content": "In the Devices Online table, select all devices that you wish to block, click Block above the table. The device will be automatically added to the Devices in Blacklist or Whitelist."
            }, {
                "type": "title",
                "title": "Devices in Black/WhiteList"
            }, {
                "type": "note",
                "title": "To blacklist or whitelist a device",
                "content": ["Click the Add icon.", "Enter the Device Name.", "Enter the MAC address of the device.", "Click OK."]
            }, {
                "type": "paragraph",
                "title": "To modify or delete a device in the Black/Whitelist",
                "content": "In the Black/Whitelist table, click the Modify icon or the Delete icon that corresponds to the device that you wish to modify or delete."
            }, {
                "type": "paragraph",
                "title": "To delete multiple devices in the Black/Whitelist",
                "content": "In the Black/Whitelist table, select all devices that you wish to delete, click Delete above the list."
            }]
        },
        "ddos": {
            "TITLE": "Firewall",
            "CONTENT": [{
                "type": "name",
                "title": "SPI Firewall",
                "content": "Stateful Packet Inspection (SPI) firewall prevents cyber attacks and validates the traffic that is passing through the router based on the protocol. The SPI Firewall is enabled by default. "
            }, {
                "type": "title",
                "title": "DoS Protection"
            }, {
                "type": "name",
                "title": "DoS Protection",
                "content": "Denial of Service (DoS) protection protects your LAN against DoS attacks from flooding your network with server requests. By default, DoS Protection is disabled (Off)."
            }, {
                "type": "name",
                "title": "ICMP-FLOOD Attack Filtering",
                "content": "Enable to prevent the Internet Control Message Protocol (ICMP) flood attack."
            }, {
                "type": "name",
                "title": "UDP-FLOOD Attack Filtering",
                "content": "Enable to prevent the User Datagram Protocol (UDP) flood attack."
            }, {
                "type": "name",
                "title": "TCP-SYN-FLOOD Attack Filtering",
                "content": "Enable to prevent the Transmission Control Protocol-Synchronize (TCP-SYN) flood attack.",
                "children": [{
                    "type": "name",
                    "title": "Off",
                    "content": "No protection."
                }, {
                    "type": "name",
                    "title": "Low",
                    "content": "Low-level of protection and low impact on router performance."
                }, {
                    "type": "name",
                    "title": "Middle",
                    "content": "Moderate-level of protection and semi-noticeable impact on router performance."
                }, {
                    "type": "name",
                    "title": "High",
                    "content": "High-level of protection but a noticeable impact on router performance."
                }]
            }, {
                "type": "name",
                "title": "Ignore Ping Packet From WAN Port",
                "content": "Enable to ignore pings from WAN port."
            }, {
                "type": "name",
                "title": "Forbid Ping Packet From LAN Port",
                "content": "Enable to forbid pings from LAN port."
            }, {
                "type": "title",
                "title": "Blocked DoS Host List"
            }, {
                "type": "name",
                "title": "Blocked DoS Host List",
                "content": "Lists the IP Address and MAC Address from any blocked DoS attack source."
            }, {
                "type": "paragraph",
                "title": "To delete an entry",
                "content": "In the Host List, select the entry that you wish to delete and click Delete above the table."
            }]
        },
        "arpBind": {
            "TITLE": "Settings",
            "CONTENT": [{
                "type": "paragraph",
                "content": "ARP (Address Resolution Protocol) binding is useful for controlling access of a specific computer in the LAN by binding the IP address and the MAC address of the device together. ARP binding also prevents other devices from using a specific IP address."
            }, {
                "type": "title",
                "title": "ARP List"
            }, {
                "type": "paragraph",
                "content": "Displays the MAC and IP addresses of the currently connected devices."
            }, {
                "type": "name",
                "title": "ARP Entry Number",
                "content": "Displays the total number of devices that are currently connected to the router."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address of the connected device."
            }, {
                "type": "name",
                "title": "IP Address",
                "content": "Displays the IP address allocated to the connected device."
            }, {
                "type": "name",
                "title": "Bound",
                "content": "Indicates whether the MAC and IP addresses are bound or not."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Bind or Delete the corresponding entry from the list."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "You cannot bind the same IP address to more than one MAC address."
            }, {
                "type": "title",
                "title": "Binding List"
            }, {
                "type": "note",
                "title": "To set up a device with ARP binding",
                "content": ["Click Add.", "Enter the MAC Address of the device.", "Enter an IP Address that you want bind to the above MAC address.", "Enter a Description for this device. (Optional)", "Select Enable.", "Click OK."]
            }, {
                "type": "paragraph",
                "title": "To modify or delete an entry",
                "content": "In the Binding List, click the Modify icon or the Delete icon that corresponds to the entry that you wish to modify or delete."
            }, {
                "type": "paragraph",
                "title": "To delete multiple entries",
                "content": "In the Binding List, select all the entries that you wish to delete, click Delete above the list."
            }]
        },
        "ipv6": {
            "TITLE": "Internet",
            "CONTENT": [{
                "type": "name",
                "title": "IPv6",
                "content": "Select to enable (On) or disable (Off) the IPv6 feature of the router."
            }, {
                "type": "title",
                "title": "Internet Connection Type: Static IP"
            }, {
                "type": "name",
                "title": "Static IP",
                "content": "Select this type if your ISP uses Static IPv6 address assignment."
            }, {
                "type": "name",
                "title": "IPv6 Address/Default Gateway/Primary DNS/Secondary DNS",
                "content": "Enter these parameters as provided by the ISP."
            }, {
                "type": "name",
                "title": "MTU Size",
                "content": "The default and typical MTU (Maximum Transmission Unit) size for most Ethernet networks is 1500 Bytes. It is NOT recommended to change the default MTU size unless required by the ISP."
            }, {
                "type": "title",
                "title": "Internet Connection Type: Dynamic IP"
            }, {
                "type": "name",
                "title": "Dynamic IP",
                "content": "Select this type if your ISP uses Dynamic IPv6 address assignment."
            }, {
                "type": "name",
                "title": "IPv6 Address/Primary DNS/Secondary DNS",
                "content": "These parameters are automatically assigned by the DHCPv6 server from your ISP."
            }, {
                "type": "name",
                "title": "Renew",
                "content": "Click this button to get new IPv6 parameters from the DHCPv6 server of the ISP."
            }, {
                "type": "name",
                "title": "Release",
                "content": "Click this button to release all IPv6 addresses assigned by DHCPv6 server from the ISP."
            }, {
                "type": "name",
                "title": "Get IPv6 Address",
                "content": "Select to “Get non-temporary IPv6 address” or “Get IPv6 prefix delegation”, according to your ISP."
            }, {
                "type": "name",
                "title": "DNS Address",
                "content": "Select to “Get dynamically from ISP” or “Use the following DNS address”. If “Use the following DNS Address” is selected, please manually enter the DNS address provided by your ISP."
            }, {
                "type": "name",
                "title": "Primary DNS/Secondary DNS",
                "content": "Enter these parameters manually or dynamically obtain them from the ISP."
            }, {
                "type": "title",
                "title": "Internet Connection Type: PPPoE"
            }, {
                "type": "name",
                "title": "PPPoE",
                "content": "Select this type if your ISP uses PPPoEv6, and provides you with a username and password."
            }, {
                "type": "name",
                "title": "Username/Password",
                "content": "Enter these parameters as provided by your ISP."
            }, {
                "type": "name",
                "title": "IPv6 Address",
                "content": "It will be automatically assigned by DHCPv6 server from the ISP, after you enter the username and password and click Connect."
            }, {
                "type": "name",
                "title": "DNS Address",
                "content": "Select to “Get dynamically from ISP” or “Use the following DNS address”. If “Use the following DNS Address” is selected, please manually enter the DNS address provided by your ISP."
            }, {
                "type": "name",
                "title": "Get IPv6 Address",
                "content": "Select “Non-temporary” or “Prefix delegation” or “Specified by ISP” according to your ISP. If selecting “Specified by ISP”, you need to manually enter the IPv6 address as provided by your ISP. If you select “Non-temporary” or “Prefix delegation”, the IPv6 address will be automatically assigned by the DHCPv6 server from the ISP.",
                "children": [{
                    "type": "name",
                    "title": "Non-temporary",
                    "content": "Get a non-temporary IPv6 address by DHCPv6 Server from the Internet Service Provider(ISP)."
                }, {
                    "type": "name",
                    "title": "Prefix delegation",
                    "content": "Get a prefix delegation IPv6 address by DHCPv6 Server from the ISP,and the client in LAN create a IPv6 address with the delegation."
                }, {
                    "type": "name",
                    "title": "Specified by ISP",
                    "content": "Use a static IPv6 address specified by the ISP."
                }]
            }, {
                "type": "name",
                "title": "Connect",
                "content": "Click this button to get Internet connection."
            }, {
                "type": "name",
                "title": "Disconnect",
                "content": "Click this button to disconnect from the Internet."
            }, {
                "type": "title",
                "title": "Internet Connection Type: 6to4 Tunnel"
            }, {
                "type": "name",
                "title": "6to4 Tunnel",
                "content": "Select this type if your ISP uses 6to4 deployment for assigning address."
            }, {
                "type": "name",
                "title": "IPv4 Address/IPv4 Subnet Mask/IPv4 Default Gateway/Tunnel Address",
                "content": "These parameters will be dynamically generated by the IPv4 parameters of WAN port after you click Connect."
            }, {
                "type": "name",
                "title": "Use the following DNS Server",
                "content": "Select the checkbox to enable this option. And then enter the primary DNS/secondary DNS as provided by your ISP."
            }, {
                "type": "name",
                "title": "Connect",
                "content": "Click this button to get Internet connection."
            }, {
                "type": "name",
                "title": "Disconnect",
                "content": "Click this button to disconnect from the Internet."
            }, {
                "type": "title",
                "title": "Internet Connection Type: 6RD"
            }, {
                "type": "name",
                "title": "6RD",
                "content": "Select this type if your ISP uses 6RD deployment, and provides you with an IPv4 address and IPv6 address prefix."
            }, {
                "type": "name",
                "title": "Configuration Type",
                "content": "Select Auto or Manual for configuring the 6RD channel parameters according to your ISP. If the default parameters below coincide with those provided by your ISP, you can select Auto; otherwise, select Manual and enter the parameters as provided by your ISP."
            }, {
                "type": "name",
                "title": "IPv4 Mask Length/6RD Prefix/6RD Prefix Length/Border Reply IPv4 Address",
                "content": "Check if the preset parameters coincide with those provided by your ISP, and keep it default or manually enter them as provided by your ISP."
            }, {
                "type": "title",
                "title": "Internet Connection Type: DS-Lite"
            }, {
                "type": "name",
                "title": "DS-Lite",
                "content": "Select this type if your ISP uses DS-lite deployment, and provides you with an AFTR domain name or IPv6 address, for setting up an IPv4-in-IPv6 tunnel in the IPv6 network to communicate IPv4 traffics or IPv6 traffics in their own respective network."
            }, {
                "type": "name",
                "title": "AFTR Name",
                "content": "AFTR is short for Address Family Transition Router. In this field, enter the AFTR domain name or IPv6 address as provided by your ISP."
            }, {
                "type": "name",
                "title": "Secondary Connection",
                "content": "Select the secondary connection type as provided by your ISP.",
                "children": [{
                    "type": "name",
                    "title": "Dynamic IP",
                    "content": "Select if your ISP provides you with Dynamic IP as the secondary connection type and the parameters IPv6 Address/Primary DNS/Secondary DNS will be automatically assigned by DHCPv6 server from the ISP."
                }, {
                    "type": "name",
                    "title": "Static IP",
                    "content": "Select this type if your ISP uses Static IPv6 address assignment."
                }, {
                    "type": "name",
                    "title": "PPPoE",
                    "content": "Select if your ISP provides you with PPPoE as the secondary connection type and enter username/password as provided by your ISP. The IPv6 address will be automatically assigned after you click Connect."
                }]
            }, {
                "type": "title",
                "title": "Internet Connection Type: Pass Through (Bridge)"
            }, {
                "type": "paragraph",
                "content": "Select this type if your ISP uses Pass Through (Bridge) network deployment. For this type, no parameters are provided and no configurations are needed."
            }, {
                "type": "title",
                "title": "LAN"
            }, {
                "type": "paragraph",
                "content": "Except for Pass Through (Bridge), the other 6 types of Internet connection require configurations for the IPv4 LAN parameters at the same time."
            }, {
                "type": "name",
                "title": "Assigned Type",
                "content": "Select the appropriate one according to your ISP.",
                "children": [{
                    "type": "name",
                    "title": "DHCPv6",
                    "content": "To automatically assign IP addresses to the clients in the LAN.",
                    "children": [{
                        "type": "name",
                        "title": "Address Prefix",
                        "content": "Enter the address prefix as provided by your ISP."
                    }, {
                        "type": "name",
                        "title": "Release Time",
                        "content": "It means the time when the IP address assigned remains valid. Keep the default 86400 seconds or change it if required by your ISP."
                    }, {
                        "type": "name",
                        "title": "Address",
                        "content": "It is the IP address assigned automatically by DHCPv6 server from the ISP."
                    }]
                }, {
                    "type": "name",
                    "title": "SLAAC+Stateless DHCP",
                    "connector": " ",
                    "children": [{
                        "type": "name",
                        "title": "Address Prefix",
                        "content": "Enter the address prefix as provided by your ISP."
                    }, {
                        "type": "name",
                        "title": "Address",
                        "content": "It is the IP address assigned automatically by DHCPv6 server from the ISP."
                    }]
                }, {
                    "type": "name",
                    "title": "SLAAC+RDNSS",
                    "connector": " ",
                    "children": [{
                        "type": "name",
                        "title": "Address Prefix",
                        "content": "Enter the address prefix as provided by your ISP."
                    }, {
                        "type": "name",
                        "title": "Address",
                        "content": "It is the IP address assigned automatically by DHCPv6 server from the ISP."
                    }]
                }]
            }, {
                "type": "title",
                "title": "MAC Clone"
            }, {
                "type": "name",
                "title": "Use Default MAC Address",
                "content": "DO NOT change the default MAC address of the router, in case the ISP does not bind the assigned IP address to the MAC address."
            }, {
                "type": "name",
                "title": "Use Current Computer MAC Address",
                "content": "Select to copy the current MAC address of the computer that is connected to the router, in case the ISP binds the assigned IP address to the computer's MAC address."
            }, {
                "type": "name",
                "title": "Use Custom MAC Address",
                "content": "Enter the MAC address manually, in case the ISP binds the assigned IP address to the specific MAC address."
            }]
        },
        "time": {
            "TITLE": "Time Settings",
            "CONTENT": [{
                "type": "note",
                "title": "To automatically synchronize the time",
                "content": ["In the Set The Time field, select Get automatically from the Internet.", "Select your local Time Zone from the drop-down menu.", "In the NTP Server I field, enter the IP address or domain name of your desired NTP Server.", "In the NTP Server II field, enter the IP address or domain name of the second NTP Server. (Optional)", "Click Obtain.", "Click Save."]
            }, {
                "type": "note",
                "title": "To manually set the date and time",
                "content": ["In the Set The Time field, select Manually.", "Enter the current Date.", "Select the current Time (In 24-hour clock format, e.g. 16:00:00 is 04:00PM).", "Click Save."]
            }, {
                "type": "title",
                "title": "Daylight Saving"
            }, {
                "type": "note",
                "title": "To set up Daylight Saving time",
                "content": ["Select Enable Daylight Saving.", "Select the correct Start date and time when daylight saving time starts at your local time zone.", "Select the correct End date and time when daylight saving time ends at your local time zone.", "Click Save."]
            }]
        },
        "diagnostic": {
            "TITLE": "Diagnostics",
            "CONTENT": [{
                "type": "paragraph",
                "content": "The router provides Ping and Traceroute tools to help you troubleshoot network connectivity problems. The Ping tool sends packets to a target IP Address or Domain Name and logs the results, such as the number of packets sent/received, and the round-trip time. The Traceroute tool sends packets to a target IP Address or Domain Name and displays the number of hops and time to reach the destination."
            }, {
                "type": "paragraph",
                "content": "You can ping and traceroute a local device by the IP address or a domain name, such as google.com, yahoo.com, etc."
            }, {
                "type": "note",
                "title": "To diagnose using Ping",
                "content": ["Enter the target IP Address or Domain Name.", "Click the Arrow Icon to open the Advanced menu and specify the Ping Count, and Ping Packet Size. (Optional)", "Click Start."]
            }, {
                "type": "note",
                "title": "To diagnose using Traceroute",
                "content": ["Enter the target IP Address or Domain Name.", "Click the Arrow Icon to open the Advanced menu and specify the number of hops (to be reached) in the Traceroute Max TTL (Time to Live) field. The default is 20. (Optional)", "Click Start."]
            }]
        },
        "softup": {
            "TITLE": "Firmware Upgrade",
            "CONTENT": [{
                "type": "paragraph",
                "content": "Before upgrading the firmware of the router, you will need to download the latest firmware update from the <a href=\"http://www.tp-link.us/Support/\">TP-LINK Support</a> website to your computer."
            }, {
                "type": "note",
                "title": "IMPORTANT: To prevent upgrade failure, please note the following:",
                "content": ["Make sure the latest firmware file is matched with the hardware version (as shown under the Firmware Upgrade page).", "Make sure that you have a stable connection between the router and your computer. It is NOT recommended to upgrade the firmware wirelessly.", "Make sure you remove any USB storage device connected to the router before the firmware upgrade to prevent data loss.", "Backup your router configuration.", "Do not turn off the router during the firmware upgrade."]
            }, {
                "type": "note",
                "title": "To upgrade the router’s firmware",
                "content": ["Click Browse.", "Locate and select the downloaded firmware file.", "Click Upgrade."]
            }, {
                "type": "paragraph",
                "content": "The upgrade process takes a few minutes to complete. Please DO NOT power off the router while the upgrade is in progress."
            }]
        },
        "backNRestore": {
            "TITLE": "Backup",
            "CONTENT": [{
                "type": "paragraph",
                "content": "It is highly recommended to backup your current configurations, in case a recovery is needed to restore the system to a previous state or from the factory defaults."
            }, {
                "type": "paragraph",
                "content": "Click Backup to save your current configurations to your computer. Make sure to save the backup file to a safe location that you can retrieve and restore the router later, if needed."
            }, {
                "type": "title",
                "title": "Restore"
            }, {
                "type": "note",
                "title": "To restore from a backup",
                "content": ["Click Browse.", "Locate and select the backup file.", "Click Restore."]
            }, {
                "type": "title",
                "title": "Factory Default Restore"
            }, {
                "type": "paragraph",
                "content": "Click Factory Restore to reset your router to its factory default settings."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": ["1. Factory Restore will erase all settings that you have configured for the router. To re-login to the router's management page, use the default admin for both username and password.", "2. Please DO NOT power off the router during the backup or restore process."]
            }]
        },
        "manageCtrl": {
            "TITLE": "Account Management",
            "CONTENT": [{
                "type": "paragraph",
                "content": "This page allows you to change your login username and/or password, and to set an email address for password recovery."
            }, {
                "type": "name",
                "title": "Old Username",
                "content": "Type in your current username."
            }, {
                "type": "name",
                "title": "Old Password",
                "content": "Type in your current password."
            }, {
                "type": "name",
                "title": "New Username",
                "content": "Type in your new username."
            }, {
                "type": "name",
                "title": "New Password",
                "content": "Type in your new password."
            }, {
                "type": "name",
                "title": "Confirm New Password",
                "content": "Type in your new password again."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "If you decide to change the current username and password used to login to the router, make sure to write down the new login information in a secure location."
            }, {
                "type": "title",
                "title": "Password Recovery"
            }, {
                "type": "name",
                "title": "Enable Password Recovery",
                "content": "It is highly recommended that you enable the Password Recovery feature, which will send your lost or forgotten username and password via email."
            }, {
                "type": "name",
                "title": "From",
                "content": "Enter the valid email address to be used for outgoing email."
            }, {
                "type": "name",
                "title": "To",
                "content": "Enter the valid email address to be used for incoming email."
            }, {
                "type": "name",
                "title": "SMTP Server",
                "content": "Enter the SMTP server address that the router uses to send the account information via email."
            }, {
                "type": "name",
                "title": "Enable Authentication",
                "content": " Select Enable Authentication if the outgoing email server requires authentication for sending email, and fill out the Username and Password into the corresponding fields. These fields are case-sensitive."
            }, {
                "type": "title",
                "title": "Local Management"
            }, {
                "type": "paragraph",
                "content": "This section allows you to limit the number of client devices on your LAN from accessing the router using the MAC address-based authentication."
            }, {
                "type": "name",
                "title": "Access for All LAN Connected Devices",
                "content": "Toggle On to enable local management for all LAN connected devices or Off to enable the management for a specific device."
            }, {
                "type": "name",
                "title": "MAC Address",
                "content": "Displays the MAC address of the limited access device."
            }, {
                "type": "name",
                "title": "Description",
                "content": "Displays the description of the limited access device."
            }, {
                "type": "name",
                "title": "Status",
                "content": "Displays the current status of the limited access device (enabled or disabled)."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Modify and Delete the corresponding device from the list."
            }, {
                "type": "note",
                "title": "To add a client device to the list",
                "content": ["Click Add.", "Click View Existing Devices to choose an existing device or enter the MAC address of a device into the MAC Address field.", "Enter a Description for the device. (Optional)", "Select Enable.", "Click OK."]
            }, {
                "type": "paragraph",
                "title": "To modify or delete a device in the list",
                "content": "Click the Modify icon or the Delete icon that corresponds to the device that you wish to modify or delete."
            }, {
                "type": "paragraph",
                "title": "To delete multiple devices",
                "content": "Select all the devices that you wish to delete, click Delete."
            }, {
                "type": "title",
                "title": "Remote Management"
            }, {
                "type": "paragraph",
                "content": "The Remote Management feature allows you to access and configure the router remotely from the Internet."
            }, {
                "type": "name",
                "title": "Disable Remote Management",
                "content": "Select this option to disable the remote management."
            }, {
                "type": "name",
                "title": "Enable Remote Management for All Devices",
                "content": "Select this option to enable the remote management for all IP addresses. If selected, enter the Web Management Port field."
            }, {
                "type": "name",
                "title": "Enable Remote Management for Specified Devices",
                "content": "Select this option to enable the remote management for a specific IP address. If selected, enter the Web Management Port and Remote Management IP Address fields."
            }, {
                "type": "name",
                "title": "Web Management Port",
                "content": "Enter the port number, between 1024 and 65535, which is used to access the router’s web management interface with greater security. Normally, the web browsers use the standard HTTP service port 80. The default and common service port is 8080, which is an alternate service port of the HTTP."
            }, {
                "type": "name",
                "title": "Remote Management IP Address",
                "content": "Enter a valid IP address or IP range to be allowed to access the router. If 255.255.255.255 is entered, everyone is allowed to access."
            }]
        },
        "log": {
            "TITLE": "System Log",
            "CONTENT": [{
                "type": "paragraph",
                "content": "The System Log page displays a list of the most recent activities (events) of the router. You can define what types of logs and/or the level of logs you want to view. This page also has the Email feature that you can configure to automatically send the log files to a specific email address, or export the log files to a computer."
            }, {
                "type": "name",
                "title": "Type",
                "content": "Select the type of system log to display."
            }, {
                "type": "name",
                "title": "Level",
                "content": "Select the level of system log to display."
            }, {
                "type": "name",
                "title": "Refresh",
                "content": "Click this icon to update the system log."
            }, {
                "type": "name",
                "title": "Delete All",
                "content": "Click this icon to delete all system logs."
            }, {
                "type": "name",
                "title": "Save log",
                "content": "Click this button to download all system log files to your local computer."
            }, {
                "type": "name",
                "title": "Mail Settings",
                "content": "Click this button to configure email settings for system logs."
            }, {
                "type": "note",
                "title": "To configure email settings for system logs",
                "content": ["Click Mail Settings.", "From - Enter the valid email address to be used for outgoing email.", "To - Enter the valid email address to be used for incoming email.", "SMTP Server - Enter the SMTP server address that the router uses to send the system logs via email.", {
                    "content": "5. Enable Authentication - Select this option if the SMTP server requires authentication for sending email.",
                    "children": [{
                        "type": "name",
                        "title": "Username",
                        "content": "Enter the username for the SMTP server. This field is case-sensitive."
                    }, {
                        "type": "name",
                        "title": "Password",
                        "content": "Enter the password for the SMTP server. This field is also case-sensitive."
                    }]
                }, {
                    "content": "6. Enable Auto Mail - Select this option to specify what time of day the system log should be sent automatically.",
                    "children": [{
                        "type": "paragraph",
                        "content": "To send the system log everyday at a specific time, enter the Hours (HH) and Minutes (MM) in 24-hour clock format, e.g. 16:00 is 4PM."
                    }, {
                        "type": "paragraph",
                        "content": "To send the system log at a specific hour or time interval, enter the number of Hours."
                    }]
                }, "Click Save."]
            }]
        },
        "stat": {
            "TITLE": "Traffic Statistics",
            "CONTENT": [{
                "type": "paragraph",
                "content": "The Traffic Statistics page displays the network traffic of the LAN, WAN, and WLAN packet send and receive."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "If NAT Boost is enabled, Traffic Statistics should be disabled."
            }, {
                "type": "name",
                "title": "Traffic Statistics",
                "content": "By default, the Traffic Statistics is Off. To display the statistic information, click On."
            }, {
                "type": "title",
                "title": "Traffic Statistics List"
            }, {
                "type": "name",
                "title": "IP Address/MAC Address",
                "content": "Displays the IP address and MAC address of the associated client device."
            }, {
                "type": "name",
                "title": "Total Packets",
                "content": "Displays the total number of packets transmitted and received by the client device since the beginning of the session or the last counter reset."
            }, {
                "type": "name",
                "title": "Total Bytes",
                "content": "Displays the total number of bytes transmitted and received by the client device since the beginning of the session or the last counter reset."
            }, {
                "type": "name",
                "title": "Current Packets",
                "content": "Displays the current number of packets transmitted and received at a specific time interval."
            }, {
                "type": "name",
                "title": "Current Bytes",
                "content": "Displays the current number of bytes transmitted and received at a specific time interval."
            }, {
                "type": "name",
                "title": "Current ICMP Tx",
                "content": "Displays the current transmission rate and the maximum transmission rate of ICMP packets transmitted through the WAN port per second."
            }, {
                "type": "name",
                "title": "Current UDP Tx",
                "content": "Displays the current transmission rate and the maximum transmission rate of UDP packets transmitted through the WAN port per second."
            }, {
                "type": "name",
                "title": "Current SYN Tx",
                "content": "Displays the current transmission rate and the maximum transmission rate of TCP SYN packets transmitted through the WAN port per second."
            }, {
                "type": "name",
                "title": "Modify",
                "content": "Displays options to Reset (to zero) and Delete the corresponding statistic from the list."
            }, {
                "type": "name",
                "title": "Refresh",
                "content": "Click to update the statistic information on the page."
            }, {
                "type": "name",
                "title": "Reset All",
                "content": "Click to reset all statistic values in the list to zero."
            }, {
                "type": "name",
                "title": "Delete All",
                "content": "Click to delete all statistic information in the list."
            }]
        },
        "sysconf": {
            "TITLE": "Wireless 2.4GHz/5GHz",
            "CONTENT": [{
                "type": "name",
                "title": "Beacon Interval",
                "content": "Enter a value between 40 and 1000 in milliseconds to determine the duration between beacon packets that are broadcasted by the router to synchronize the wireless network. The default is 100 milliseconds."
            }, {
                "type": "name",
                "title": "RTS Threshold",
                "content": "Enter a value between 1 and 2346 to determine the packet size of data transmission through the router. By default, the RTS (Request to Send) Threshold size is 2346. If the packet size is greater than the preset threshold, the router sends Request of Send frames to a particular receiving station and negotiates the sending of a data frame, or else the packet will be sent immediately."
            }, {
                "type": "name",
                "title": "DTIM Interval",
                "content": "This value determines the interval of the Delivery Traffic Indication Message (DTIM). Enter a value between 1 and 15 in milliseconds. The default value is 1, indicates the DTIM Interval is the same as Beacon Interval."
            }, {
                "type": "name",
                "title": "Group Key Update Period",
                "content": "Enter the number of seconds (minimum 30) to control the time interval for the encryption key automatic renewal. The default is 0, indicating no key renewal."
            }, {
                "type": "name",
                "title": "WMM Feature",
                "content": "The WMM function guarantees the packets with high-priority messages being transmitted preferentially. It is enabled by default and highly recommended."
            }, {
                "type": "name",
                "title": "Short GI Feature",
                "content": "This function is enabled by default and recommended to increase the data capacity by reducing the Guard Interval (GI) time."
            }, {
                "type": "name",
                "title": "AP Isolation Feature",
                "content": "By default, this function is disabled. If you want to confine and restrict all wireless devices connected to your network from interacting with each other, but still able to access the Internet, select the Enable AP Isolation checkbox."
            }, {
                "type": "name",
                "title": "WDS Bridging",
                "content": "Enable the WDS (Wireless Distribution System) Bridging feature to allow the router to bridge with another access point (AP) in a wireless local area network (WLAN). If this feature is enabled, configure the following:",
                "children": [{
                    "type": "name",
                    "title": "SSID",
                    "content": "Enter the SSID of the WAP (Wireless Access Point) that the router will connect to as a client or use the Survey feature to find all available networks in the current channel."
                }, {
                    "type": "name",
                    "title": "Survey",
                    "content": "Click this button to scan and display the SSID, BSSID, signal strength, channel, and security information of all available wireless networks within range. Once you select a network, the SSID, MAC Address, and Security will automatically populate."
                }, {
                    "type": "name",
                    "title": "MAC Address (to be bridged)",
                    "content": "Enter the MAC address (BSSID) in 12 hexadecimal characters (0-9, a-f, A-F) format separated by hyphens of the wireless access point that the router will connect to as a client. If you choose the desired AP through the Survey feature, the MAC Address  field is automatically populated."
                }, {
                    "type": "name",
                    "title": "Security",
                    "content": "Select the correct security type of the selected access point, No, WPA-PSK/WPA2-PSK or WEP. If you choose the desired AP through the Survey feature, the Security field is automatically populated.",
                    "children": [{
                        "type": "name",
                        "title": "Password",
                        "content": "This option is available when the security type is WPA-PSK/WPA2-PSK or WEP. Enter the security password of the selected access point."
                    }, {
                        "type": "name",
                        "title": "Auth. Type",
                        "content": "This option is only available when the security type is WEP (Wired Equivalent Privacy). Select the appropriate authentication type (Auto, Open System or shared Key) used of the selected access point."
                    }, {
                        "type": "name",
                        "title": "WEP Key Format",
                        "content": "This option is only available when the security type is WEP. Select the key format (ASCII or Hexadecimal) used of the selected AP."
                    }]
                }]
            }, {
                "type": "paragraph",
                "content": "Click Save to save your settings."
            }, {
                "type": "title",
                "title": "NAT"
            }, {
                "type": "paragraph",
                "content": "Select the Enable NAT checkbox and click Save to enable the NAT (Network Address Translation) function."
            }, {
                "type": "name",
                "title": "NAT Boost",
                "content": "Select the Enable NAT Boost checkbox and click Save to ensure that your router has the best throughput."
            }, {
                "type": "paragraph",
                "title": "Note",
                "content": "NAT Boost will be disabled when either QoS or Traffic Statistics is enabled."
            }, {
                "type": "title",
                "title": "Dos Protection Level Settings"
            }, {
                "type": "paragraph",
                "content": "The DoS Protection Level protects the router from TCP-SYN-Flood, UDP-Flood, and ICMP-Flood attacks."
            }, {
                "type": "name",
                "title": "ICMP-FLOOD Packets Level",
                "content": "Enter a value between 5 and 7200 ICMP packets to trigger the ICMP-FLOOD protection immediately when the number of packets exceeds the preset threshold value."
            }, {
                "type": "name",
                "title": "UDP-FLOOD Packets Level",
                "content": "Enter a value between 5 and 7200 UDP packets to trigger the UDP-FLOOD protection immediately when the number of packets exceeds the preset threshold value."
            }, {
                "type": "name",
                "title": "TCP-FLOOD Packets Level",
                "content": "Enter a value between 5 and 7200 TCP-SYN packets to trigger the TCP-SYN-FLOOD protection immediately when the number of packets exceeds the preset threshold value."
            }, {
                "type": "paragraph",
                "content": "Click Save to save your settings."
            }]
        }
    };

})(jQuery);
