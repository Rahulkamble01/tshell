import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(function()
    {
        $(document).on('click', '.btn-add', function(e)
        {
            e.preventDefault();
    
            var newinput = $('.controls .topics'),
                currentEntry = $(this).parents('.entry:first'),
                newEntry = $(currentEntry.clone()).appendTo(newinput);
    
            newEntry.find('input').val('');
            newinput.find('.entry:not(:last) .btn-add')
                .removeClass('btn-add').addClass('btn-remove')
                .removeClass('btn-success').addClass('btn-danger')
                .html('<span class="fa fa-minus"></span>');
        }).on('click', '.btn-remove', function(e)
        {
        $(this).parents('.entry:first').remove();
    
        e.preventDefault();
        return false;
      });
    });
  }
 
 
}
