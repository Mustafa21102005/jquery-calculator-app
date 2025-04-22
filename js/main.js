$(document).ready(function() {
  $('#btn').click(function() {
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var op = $('#op').val();

    switch (op) {
      case '+':
        $('#result').removeClass().addClass('success').text(num1 + num2);
        break;

      case '-':
        if (num2 > num1) {
          $('#result').removeClass().addClass('error').text("Number 2 cannot be greater than number 1.");
        } else {
          $('#result').removeClass().addClass('success').text(num1 - num2);
        }
        break;

      case '/':
        if (num2 > num1) {
          $('#result').removeClass().addClass('error').text("Number 2 cannot be greater than number 1.");
        } else if (num2 === 0) {
          $('#result').removeClass().addClass('error').text("Number 2 cannot be 0.");
        } else {
          $('#result').removeClass().addClass('success').text(num1 / num2);
        }
        break;

      case '*':
        $('#result').removeClass().addClass('success').text(num1 * num2);
        break;

      default:
        $('#result').removeClass().addClass('error').text("Not a valid operator");
        break;
    }
  });
});