var desc = {};
desc[1] = ["User-Name", "Client Username."];
desc[4] = [
  "NAS-IP-Address",
  "The IP address of the NAS originating the request",
];
desc[5] = [
  "NAS-Port",
  "The physical port number of the NAS originating the request",
];
desc[6] = ["Service-Type", "The type of service that the user has requested"];
desc[7] = ["Framed-Protocol", "The protocol to be used"];
desc[8] = [
  "Framed-IP-Address",
  "The framed IP address to be configured for the user.",
];
desc[9] = ["Framed-IP-Netmask", "The IP netmask to be configured for the user"];
desc[10] = [
  "Framed-Routing",
  "The routing method to be used by the user.",
  "\t",
  "11",
  "Filter-ID",
  "The name of the filter list for the user requesting authentication.",
  "\t",
  "12",
  "Framed-MTU",
  "The maximum transmission unit (MTU) to be configured for the user.",
];
desc[12] = ["Framed-MTU", ""];
desc[13] = ["Framed-Compression", "The compression protocol to be used."];
desc[14] = [
  "Login-IP-Host",
  "The IP address of the host to which the user should be connected.",
];
desc[15] = [
  "Login-Service",
  "The service that connects the user to the login host.",
];
desc[16] = [
  "Login-TCP-Port",
  "The TCP port to which the user is to be connected.",
];
desc[18] = [
  "Reply-Message",
  "The message displayed to the user when an authentication request is accepted.",
];
desc[19] = ["Callback-Number", "The callback phone number."];
desc[20] = [
  "Callback-ID",
  "The name of a location to be called by the access server when performing callback.",
];
desc[22] = [
  "Framed-Route",
  "The routing information that is configured on the access client.",
];
desc[23] = [
  "Framed-IPX-Network",
  "The Internetwork Packet Exchange (IPX) network number to be configured on the NAS for the user.",
];
desc[25] = [
  "Class",
  "The attribute sent to the client in an Access-Accept packet",
];
desc[26] = [
  "Vendor-Specific",
  "The attribute that is used to support proprietary NAS features.",
];
desc[27] = [
  "Session-Timeout",
  "The length of time (in seconds) before a session is terminated.",
];
desc[28] = [
  "Idle-Timeout",
  "The length of idle time (in seconds) before a session is terminated.",
];
desc[29] = [
  "Termination-Action",
  "The action that the NAS is to take when service is completed.",
];
desc[30] = [
  "Called-Station-ID",
  "The phone number that is dialed by the user.",
];
desc[31] = [
  "Calling-Station-ID",
  "The phone number from which the call originated.",
];
desc[32] = [
  "NAS-Identifier",
  "The string that identifies the NAS originating the request.",
];
desc[34] = [
  "Login-LAT-Service",
  "The host with which the user is to be connected by Local Area Transport (LAT).",
];
desc[35] = [
  "Login-LAT-Node",
  "The node with which the user is to be connected by LAT.",
];
desc[36] = [
  "Login-LAT-Group",
  "The LAT group codes for which the user is authorized.",
];
desc[37] = [
  "Framed-AppleTalk-Link",
  "The AppleTalk network number for the serial link to the user (this is used only when the user is a router).",
];
desc[38] = [
  "Framed-AppleTalk-Network",
  "The AppleTalk network number that the NAS must query for existence in order to allocate the user AppleTalk node.",
];
desc[39] = [
  "Framed-AppleTalk-Zone",
  "The AppleTalk default zone for the user.",
];
desc[40] = [
  "Acct-Status-Type",
  "The number that specifies whether an accounting packet starts or stops a bridging, routing, or Terminal Services session.",
];
desc[41] = [
  "Acct-Delay-Time",
  "The length of time (in seconds) for which the NAS has been sending the same accounting packet.",
];
desc[42] = [
  "Acct-Input-Octets",
  "The number of octets received by NPS during the session.",
];
desc[43] = [
  "Acct-Output-Octets",
  "The number of octets sent by NPS during the session.",
];
desc[44] = [
  "Acct-Session-ID",
  "The unique numeric string that identifies the server session.",
];
desc[45] = [
  "Acct-Authentic",
  "The number that specifies which server has authenticated an incoming call.",
];
desc[46] = [
  "Acct-Session-Time",
  "The length of time (in seconds) for which the session has been active.",
];
desc[47] = [
  "Acct-Input-Packets",
  "The number of packets received by NPS during the session.",
];
desc[48] = [
  "Acct-Output-Packets",
  "The number of packets sent by NPS during the session.",
];
desc[49] = [
  "Acct-Terminate-Cause",
  "The reason that a connection was terminated by NPS.",
];
desc[50] = [
  "Acct-Multi-SSN-ID",
  "The unique numeric string that identifies the multilink session.",
];
desc[51] = ["Acct-Link-Count", "The number of links in a multilink session."];
desc[55] = [
  "Event-Timestamp",
  "The date and time that this event occurred on the NAS.",
];
desc[61] = [
  "NAS-Port-Type",
  "The type of physical port that is used by the NAS originating the request.",
];
desc[62] = [
  "Port-Limit",
  "The maximum number of ports that the NAS provides to the user.",
];
desc[63] = [
  "Login-LAT-Port",
  "The port with which the user is connected by LAT.",
];
desc[64] = ["Tunnel-Type", "The tunneling protocols to be used."];
desc[65] = [
  "Tunnel-Medium-Type",
  "The transport medium to use when creating a tunnel for protocols. For example, L2TP packets can be sent over multiple link layers.",
];
desc[66] = ["Tunnel-Client-Endpt", "The IP address of the tunnel client."];
desc[67] = ["Tunnel-Server-Endpt", "The IP address of the tunnel server."];
desc[68] = ["Acct-Tunnel-Connection", "An identifier assigned to the tunnel."];
desc[75] = [
  "Password-Retry",
  "The number of times a user can try to be authenticated before the NAS terminates the connection.",
];
desc[76] = [
  "Prompt",
  "A number that indicates to the NAS whether or not it should (Prompt=1) or should not (Prompt=0) echo the user response as it is typed.",
];
desc[77] = [
  "Connect-Info",
  "Information that is used by the NAS to specify the type of connection made. Typical information includes connection speed and data encoding protocols.",
];
desc[78] = [
  "Configuration-Token",
  "The type of user profile to be used (sent from a RADIUS proxy server to a RADIUS client) in an Access-Accept packet.",
];
desc[81] = [
  "Tunnel-Pvt-Group-ID",
  "The group ID for a specific tunneled session.",
];
desc[82] = [
  "Tunnel-Assignment-ID",
  "The tunnel to which a session is to be assigned.",
];
desc[83] = [
  "Tunnel-Preference",
  "A number that indicates the preference of the tunnel type, as indicated by the Tunnel-Type attribute when multiple tunnel types are supported by the NAS.",
];
desc[85] = [
  "Acct-Interim-Interval",
  "The length of interval (in seconds) between each interim update sent by the NAS.",
];
desc[4108] = ["Client-IP-Address", "The IP address of the RADIUS client."];
desc[4116] = ["NAS-Manufacturer", "The manufacturer of the NAS."];
desc[4121] = [
  "MS-CHAP-Error",
  "The error data that describes a Microsoft Challenge Handshake Authentication Protocol (MS-CHAP) transaction.",
];
desc[4127] = [
  "Authentication-Type",
  "The authentication scheme that is used to verify the user.",
];
desc[4128] = [
  "Client-Friendly-Name",
  "The friendly name for the RADIUS client.",
];
desc[4129] = [
  "SAM-Account-Name",
  "The user account name in the Security Accounts Manager (SAM) database.",
];
desc[4130] = [
  "Fully-Qualified-User-Name",
  "The user name in canonical format.",
];
desc[4132] = [
  "EAP-Friendly-Name",
  "The friendly name that is used with Extensible Authentication Protocol (EAP).",
];
desc[4136] = ["Packet-Type", "The type of packet, which can be:"];
desc[4142] = ["Reason-Code", "The reason for rejecting a connection request:"];
desc[4149] = ["NP-Policy-Name", "The friendly name of a network policy."];
desc[4154] = ["Proxy-Policy-Name", ""];
desc[4155] = ["Provider-Type", ""];
desc[4156] = ["Provider-Name", ""];
desc[4157] = ["Remote-Server-Address", ""];

var valuedesc = {};

valuedesc[40] = {
  1: "Start",
  2: "Stop",
  3: "Interim Update",
  7: "Accounting-On",
  8: "Accounting-Off",
  9: "Tunnel-Start",
  10: "Tunnel-Stop",
  11: "Tunnel-Reject",
  12: "Tunnel-Link-Start",
  13: "Tunnel-Link-Stop",
  14: "Tunnel-Link-Reject",
  15: "Failed",
};

valuedesc[61] = {
  0: "Async (Modem)",
  1: "Sync (T1 Line)",
  2: "ISDN Sync",
  3: "ISDN Async V.120",
  4: "ISDN Async V.110",
  5: "Virtual (VPN)",
  6: "PIAFS",
  7: "HDLC Clear Channel",
  8: "X.25",
  9: "X.75",
  10: "G.3 Fax",
  11: "SDSL - Symmetric DSL",
  12: "ADSL-CAP - Asymmetric DSL Carrierless Amplitude Phase Modulation",
  13: "ADSL-DMT - Asymmetric DSL Discrete Multi-Tone",
  14: "IDSL - ISDN Digital Subscriber Line",
  15: "Ethernet",
  16: "xDSL - Digital Subscriber Line of unknown type",
  17: "Cable",
  18: "Wireless - Other",
  19: "Wireless - IEEE 802.11",
  20: "Token Ring",
  21: "FDDI",
};

valuedesc[4136] = {
  1: "Accept-Request",
  2: "Access-Accept",
  3: "Access-Reject",
  4: "Accounting-Request",
  11: "Access-Challenge",
  12: "Status-Server (experimental)",
  13: "Status-Client (experimental)",
  255: "Reserved",
};

valuedesc[4142] = {
  0: "Success",
  1: "Internal error",
  2: "Access denied",
  3: "Malformed request",
  4: "Global catalog unavailable",
  5: "Domain unavailable",
  6: "Server unavailable",
  7: "No such domain",
  8: "No such user",
  16: "Authentication failure",
  17: "Password change failure",
  18: "Unsupported authentication type",
  19: "No reversibly encrypted password is stored for the user account",
  32: "Local users only",
  33: "Password must be changed",
  34: "Account disabled",
  35: "Account expired",
  36: "Account locked out",
  37: "Logon hours are not valid",
  38: "Account restriction",
  48: "Did not match network policy",
  49: "Did not match connection request policy",
  64: "Dial-in locked out",
  65: "Dial-in disabled",
  66: "Authentication type is not valid",
  67: "Calling station is not valid",
  68: "Dial-in hours are not valid",
  69: "Called station is not valid",
  70: "Port type is not valid",
  71: "Restriction is not valid",
  80: "No record",
  96: "Session timed out",
  97: "Unexpected request",
  112: "The local NPS proxy server forwarded a connection request to a remote RADIUS server, and the remote server rejected the connection request. Check the event log on the remote RADIUS server to determine the reason that the connection request was rejected.",
  283: "Authentication failed. The certificate does not contain the Client Authentication purpose in Application Policies extensions, and cannot be used for authentication.",
  284: "Authentication failed. The certificate is not valid because the certificate issuer and the parent of the certificate in the certificate chain are required to match but do not match.",
  285: "Authentication failed. NPS cannot locate the certificate, or the certificate is incorrectly formed and is missing important information.",
  286: "Authentication failed. The certificate provided by the connecting user or computer is issued by a certification authority (CA) that is not trusted by the NPS server.",
  287: "Authentication failed. The certificate provided by the connecting user or computer does not chain to an enterprise root CA that NPS trusts.",
  288: "Authentication failed due to an unspecified trust failure.",
  289: "Authentication failed. The certificate provided by the connecting user or computer is revoked and is not valid.",
  290: "Authentication failed. A test or trial certificate is in use, however the test root CA is not trusted, according to local or domain policy settings.",
  291: "Authentication failed because NPS cannot locate and access the certificate revocation list to verify whether the certificate has or has not been revoked. This issue can occur if the revocation server is not available or if the certificate revocation list cannot be located in the revocation server database.",
  292: "Authentication failed. The value of the User-Name attribute in the connection request does not match the value of the common name (CN) property in the certificate.",
  293: "Authentication failed. The certificate provided by the connecting user or computer is not valid because it is not configured with the Client Authentication purpose in Application Policies or Enhanced Key Usage (EKU) extensions. NPS rejected the connection request for this reason.",
  294: "Authentication failed because the certificate was explicitly marked as untrusted by the Administrator. Certificates are designated as untrusted when they are imported into the Untrusted Certificates folder in the certificate store for the Current User or Local Computer in the Certificates Microsoft Management Console (MMC) snap-in.",
  295: "Authentication failed. The certificate provided by the connecting user or computer is issued by a CA that is not trusted by the NPS server.",
  296: "Authentication failed. The certificate provided by the connecting user or computer is not valid because it is not configured with the Client Authentication purpose in Application Policies or Enhanced Key Usage (EKU) extensions. NPS rejected the connection request for this reason.",
  297: "Authentication failed. The certificate provided by the connecting user or computer is not valid because it does not have a valid name.",
  298: "Authentication failed. Either the certificate does not contain a valid user principal name (UPN) or the value of the User-Name attribute in the connection request does not match the certificate.",
  299: "Authentication failed. The sequence of information provided by internal components or protocols during message verification is incorrect.",
  300: "Authentication failed. The certificate is malformed and Extensible Authentication Protocl (EAP) cannot locate credential information in the certificate.",
  301: "NPS terminated the authentication process. NPS received a cryptobinding type length value (TLV) from the access client that is not valid. This issue occurs when an attempt to breach your network security has occurred and a man-in-the-middle (MITM) attack is in progress. During MITM attacks on your network, attackers use unauthorized computers to intercept traffic between your legitimate hosts while posing as one of the legitimate hosts. The attacker's computer attempts to gain data from your other network resources. This enables the attacker to use the unauthorized computer to intercept, decrypt, and access all network traffic that would otherwise go to one of your legitimate network resources.",
  302: "NPS terminated the authentication process. NPS did not receive a required cryptobinding type length value (TLV) from the access client during the authentication process.",
};

valuedesc[4155] = { 0: "None", 1: "Windows", 2: "RADIUS Proxy" };

function hex2a(hex) {
  var str = "";
  for (var i = 0; i < hex.length; i += 2)
    try {
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    } catch (e) {
      str += ".";
    }
  return str;
}

function parseNPS(in_box) {
  var out = document.getElementById("out_box");
  out.value = "";
  lines = in_box.value.split("\n");

  for (index in lines) {
    logline = lines[index];
    var parts = logline.split(",");
    if (parts.length < 5) {
      continue;
    }
    out.value += "NAS IP: " + parts[0] + "\n";
    out.value += "Client Username: " + parts[1] + "\n";
    out.value += "Timestamp: " + parts[2] + " " + parts[3] + "\n";
    out.value += "Service: " + parts[4] + "\n";
    out.value += "RADIUS Server: " + parts[5] + "\n";

    for (var i = 6; i < parts.length; i += 2) {
      attribute = parts[i].replace(/^\s+|\s+$/g, "");
      value = parts[i + 1].replace(/^\s+|\s+$/g, "");

      if (value.substring(0, 10) == "0x000039E7") {
        code = parseInt(value.substring(10, 12), 16);
        length = parseInt(value.substring(12, 14), 16);
        unhexlified = hex2a(value.substring(14));
        value = "Aruba " + code + "(" + length + ") " + unhexlified;
      }

      line = "";
      //describe attribute and value
      try {
        line += desc[attribute][0] + ": " + valuedesc[attribute][value] + "\n";
      } catch (e) {
        //describe attribute only
        try {
          line += desc[attribute][0] + ": " + value + "\n";
        } catch (e) {
          //no descriptions availabe
          line += attribute + ": " + value + "\n";
        }
      }
      //if (attribute == "4136" && value == "2") {
      //   line = '<span style="background: #01DF3A">' + line + '</span>';
      //}
      out.value += line;
    }
    out.value += "--------------------------------------------\n\n";
  }
}
