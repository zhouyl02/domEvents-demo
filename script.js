$(clickMe).on('click', function(){
    $('.popover').show()
    $(document).one('click', function(){
        $('.popover').hide()
    }) 
}) 
$('#wrapper').on('click', function(e){
    e.stopPropagation()
})
// 另外一种写法:
// $(clickMe).on('click', function(){
//     $('.popover').show()
//     setTimeout(function(){
//         $(document).one('click', function(){
//             $('.popover').hide()
//         }) 
//     }, 0)
// }) 
// $('#wrapper').on('click', function(e){
//     e.stopPropagation()
// })