var mapArray = {
    /* basic */
    "networkMap": ["BASIC_NETWORK_INTEREST", "BASIC_NETWORK_ROUTER", "BASIC_NETWORK_CLIENTS", "BASIC_NETWORK_PRINTER", "BASIC_NETWORK_USB"],
    "wanBasic": ['BASIC_INTERNET'],
    "wirelessBasic": ["BASIC_WIRELESS"],
    "wlGuestDulBandBasic": ["BASIC_GUEST_NETWORK"],
    "usbManage": ["BASIC_DEVICE_SETTINGS", "BASIC_SHARING_SETTINGS", "BASIC_FOLDER_SHARING"],
    "printSrv": ["BASIC_PRINT_SERVER"],
    "parentCtrl": ["BASIC_PARENTAL_CONTROL", "BASIC_PARENTAL_DEVICE"],

    /* Advance */
    "status": ["STATUS_INTERNET", "STATUS_WIRELESS", "STATUS_LAN", "STATUS_GUEST"],

    /* network */
    "ethWan": ["INTERNET_INTERNET", "INTERNET_MAC"],
    "lan": ['LAN_IPV4'],
    "iptvSpec": ["IPTV"],
    "dhcp": ["DHCP_SERVER_SETTINGS", "DHCP_CLIENT_LIST", "RESERVED_IP_ADDRESS"],
    "ddns": ["DDNS"],
    "route": ["ADVANCED_ROUTING_STATIC_ROUTING", "ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE"],

    /* wireless */
    "wirelessSettings": ["WIRELESS_REGION", "WIRELESS_24G", "WIRELESS_5G"],

    "wps": ["WPS", "WPS_WIZARD"],
    "macFilter": [],
    "wirelessStat": ["WIRELESS_STATISTICS"],

    "wlGuestDulBandAdv": ["GUEST_NETWORK_SETTINGS", "GUEST_NETWORK_WIRELESS"],

    /* forwarding */
    "alg": ["NAT"],
    "virtualServer": ["VIRTUAL_SERVERS"],
    "portTrigger": ["PORT_TRIGGERING"],
    "dmz": ["DMZ"],
    "upnp": ["UPNP"],

    /* USB */
    "diskSettings": ["DISK_SETTING"],
    "folderSharing": ["FOLDER_SHARE_ACCOUNT", "FOLDER_SHARE_SETTINGS", "FOLDER_SHARE_FOLDERS"],

    "trafficCtrl": [],

    "accessControl": ["ACCESS_CONTROL", "ACCESS_MODE", "ACCESS_DEVICE", "ACCESS_LIST"],
    "ddos": ["SECURITY_FIREWALL", "SECURITY_DOS", "SECURITY_LIST"],
    "arpBind": ["IPMAC_BIND_SETTING", "IPMAC_BIND_ARP", "IPMAC_BIND_LIST"],

    "ipv6": ['IPV6', 'IPV6_LAN', 'IPV6_MAC_CLONE'],

    /* system tools */
    "time": ["TIME_SETTING", "TIME_SETTING_DAYLIGHT"],
    "diagnostic": ["DIGNOSTIC"],
    "softup": ["FIRMWARE"],
    "backNRestore": ["BACKUP", "RESTORE", "FACTORY"],
    "manageCtrl": ["ADMIN_ACCOUNT", "ADMIN_RECOVERY", "ADMIN_LOCAL", "ADMIN_REMOTE"],

    "log": ["SYSTEM_LOG"],
    "stat": ["TRAFFIC_STATISTIC", "TRAFFIC_STATISTIC_LIST"],
    "sysconf": ["SYSTEM_PARA_WIRELESS", "SYSTEM_PARA_NAT", "SYSTEM_PARA_DOS"]
};

var returnHelpObj = {};
var sohoHelpObj = $.su.CHAR.HELP;

/* change soho help struct */
$.each(sohoHelpObj, function(index, page) {
    if (typeof page.TITLE == "undefined") {
        return;
    }

    if (typeof page.CONTENT == "undefined") {
        return;
    }

    var tmpItem = {};
    tmpItem.type = "title";
    tmpItem.title = page.TITLE;

    page.CONTENT.unshift(tmpItem);
    delete page.TITLE;

    /* change setp to note && note to paragraph */

    function changeTitle(content) {
        $.each(content, function(inner, item) {
            if (item.type == "note") {
                item.type = "paragraph";
            }

            if (item.type == "step") {
                if (typeof item.content == "string") {
                    item.type = "paragraph";
                } else if (typeof item.content == "object") {
                    item.type = "note";
                    /* remove li seq num */
                    $.each(item.content, function(inner2, str) {
                        if (typeof str == "string") {
                            item.content[inner2] = str.replace(/^\d./, "").trim();
                        }
                    });
                }
            }

            if (typeof item.children != "undefined") {
                changeTitle(item.children);
            }

        });
    }

    changeTitle(page.CONTENT);

});

/* combine soho help array */
$.each(mapArray, function(pageName, mapPage) {
    //console.log(pageName);
    //console.log(mapPage);

    var pageObj = {};
    pageObj.TITLE = "",
    pageObj.CONTENT = [];

    /* get soho page help */
    $.each(mapPage, function(index, sohoName) {
        //console.log(sohoName);
        pageObj.CONTENT = pageObj.CONTENT.concat(sohoHelpObj[sohoName].CONTENT);
    });

    returnHelpObj[pageName] = pageObj;
});

/* change content title to page title */
$.each(returnHelpObj, function(index, page) {
    if (typeof page.CONTENT == "undefined") {
        return;
    }

    if (page.CONTENT.length < 1) {
        return;
    }

    if (page.CONTENT[0].type == "title") {
        if (typeof page.CONTENT[0].title == "undefined") {
            page.TITLE = page.CONTENT[0].content;
        } else {
            page.TITLE = page.CONTENT[0].title;
        }
        page.CONTENT.shift();
    }
});

/* change to string */
JSON.stringify(returnHelpObj);
