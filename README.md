WebGetOpts
===

Expose your web applications with command line arguments and use them programmatically.

### Example

Imagine there is a website that you would like to use as a service - perhaps for personal usage or as part of your own web application. For example, registering for a service, you can run this on your terminal:

`website.tld --register --username myname --email myemail@provider.tld`



We knew the website supported these arguments because the following arguments were advertised in the page metadata:

	<meta name="webgetopts" content="username:,email:,register">
	<link rel="webgetopts" type="application/x-www-form-urlencoded" href="submit/">
	
Another example 

`issues.product.tld --ticketType bug --username myname --email myemail@provider.tld --description "I have  a bug"`
	
	<meta name="webgetopts" content="ticketType:,email:,username:,description:">
	<link rel="webgetopts" type="application/x-www-form-urlencoded" href="bugreport/">

WebGetOpts binds `getopt` style arguments to a site or web application that the website claims to support. The website can decide upon the incoming **and** the reply format.

If the website supports form-style data, this would be `application/x-www-form-urlencoded`. For the above example, this would be POST data.


### Install the website

1. Installer coming soon (needs to update path etc)
2. Run `webgetopts install <address>`
3. You can now use the hostname to talk to the site.

# Tips
===

#### Use a different command name

If you don't want to use the default command name, you can provide a custom name:
`webgetopts install <address> <customname>`
This name would then be available on the terminal.

#### Autocomplete

If you have multiple sites installed, it might be handy to use the autocompletion, such as:

`example.<TAB>net`

`www.<TAB><TAB>`

and get a list of your sites.


# ToDo

* Add support for JSON and REST APIs.
* Generate MAN pages.
* Make a node package that creates ~/.webgetopts and puts template there and updates paths properly.
* Merging getopts of multiple pages.
* Support login techniques (OAuth etc), persist session, autologin etc
* Add validation. This could be extracted from HTML5 validation, defined manually or competely server side.
* Add support for types
* Create a Chrome extension that uses the Chrome Developer tools console but shows as a GUI showing the available options for arguments that accept lists **as you type**.





