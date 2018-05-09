$(link).ready(function(){

  $('a[href=alternatives.html]').click(function(){
    window.open(this.href);
    return false;
  });
});
