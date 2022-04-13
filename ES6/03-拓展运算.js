const tfboy = ['易烊千玺','王源','王俊凯']

function fun() {
    console.log(arguments);
}
fun(tfboy)
fun(...tfboy)