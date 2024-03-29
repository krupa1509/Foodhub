$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});
function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}
//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1 );
    update_amounts();
});
var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal-1);
    }
    update_amounts();
});
//validation of form
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
var phonepattern=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
$("#order-now").click( evt => {
	let isValid = true;

	// validate  email address
	const email = $("#email").val().trim();
	if (email == "")
	{
		$("#email").next().text("This field is required.");
		isValid = false;
	}
	else if ( !emailPattern.test(email) )
	{
		$("#email").next().text("Must be a valid email address.");
		isValid = false;
	}
	else
	 {
	 	$("#email").next().text("");
	  }
	$("#email").val(email);

// validate  name
	const name = $("#name").val().trim();
	if (name == "")
	{
		$("#name").next().text("This field is required.");
	  isValid = false;
	}
	else
	{
	   $("#name").next().text("");
	}
	$("#name").val(name);

// validate  phone
	const phone = $("#phone").val().trim();
	if (phone == "")
	{
		$("#phone").next().text("This field is required.");
	  isValid = false;
	}
  else if ( !phonepattern.test(phone) )
	{
		$("#phone").next().text("Must be a valid phone number.");
		isValid = false;
	}
	else
	{
	  $("#phone").next().text("");
	}
	$("#phone").val(phone);
  //validate address
  const address = $("#address").val().trim();
  if (address == "")
  {
    $("#address").next().text("This field is required.");
    isValid = false;
  }
  else
  {
    $("#address").next().text("");
  }
  $("#address").val(address);
	if (isValid == false)
	{
		evt.preventDefault();
	}

});
