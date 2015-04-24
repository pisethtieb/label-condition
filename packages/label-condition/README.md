## Label Condition
Enjoy with **label condition** package.

**label condition** package is using for label condition [Bootstrap](https://atmospherejs.com/twbs/bootstrap) .

### Prerequisites
Bootstrap must be installed .

In a Meteor app directory, enter:

	$ meteor add twbs:bootstrap
 
### Installation
    $ meteor add yousour:label-condition

### Syntax
> Template
>
>{{labelCon value compare arg1 arg2 }}
>
> Js
>
>labelCon(value, compare, arg1, arg2);

### Note
- value : value
- compare : value for compare
- arg1 : success , danger , info or warning 
- arg2 : success , danger , info or warning 

### Usage
	//Template  
	{{labelCon val "Enable" "success" "danger"}}
	//Js
	labelCon(val, "Enable", "success", "danger");

### changelog
- v. 0.0.1 (23.04.2015)
	- init


