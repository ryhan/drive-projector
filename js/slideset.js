(function() {

  this.SlideSet = (function() {
    var QUEUE_MAX_SIZE, QUEUE_SIZE;

    QUEUE_MAX_SIZE = 30;

    QUEUE_SIZE = 0;

    function SlideSet() {
      this.slides = $('.slide');
      this.slide_count = this.slides.length;
      this.slide_count_initial = this.slides.length;
      this.slides.attr('data-slide-state', 'hidden');
      this.current_slide = 0;
      this.prev_slide = 0;
      this.jump(this.current_slide);
    }

    SlideSet.prototype.queue = function(message, type, color) {
      var new_slide;
      if (type == null) {
        type = '';
      }
      if (color == null){
        color = 'black'
      }
      new_slide = $('<div />', {
        html: message,
        "class": 'slide ' + type
      });
      new_slide.css('background-color', color);
      new_slide.attr('data-slide-state', 'hidden');
      $('#slideSet').append(new_slide);
      this.slides = $('.slide');
      this.slide_count++;
      QUEUE_SIZE++;
      if (QUEUE_SIZE > QUEUE_MAX_SIZE) {
        this.slides[this.slide_count_initial].remove();
        return QUEUE_SIZE--;
      }
    };

    SlideSet.prototype.clearTable = function(table){
      $('#slideSet .slide + .slide').remove();

      this.slides = $('.slide');
      this.slide_count = this.slides.length;
      this.slide_count_initial = this.slides.length;
      this.slides.attr('data-slide-state', 'hidden');
      this.current_slide = 0;
      this.prev_slide = 0;
      this.jump(this.current_slide);
    };

    SlideSet.prototype.next = function() {
      return this.jump(this.current_slide + 1);
    };

    SlideSet.prototype.prev = function() {
      return this.jump(this.current_slide - 1);
    };

    SlideSet.prototype.jump = function(n) {
      if (n == null) {
        n = 0;
      }
      this.prev_slide = this.current_slide;
      this.current_slide = n;
      if (this.current_slide >= this.slide_count) {
        this.current_slide = 0;
      }
      if (this.current_slide < 0) {
        this.current_slide = this.slide_count - 1;
      }
      return this.transition_slides();
    };

    SlideSet.prototype.transition_slides = function() {
      $("[data-slide-state=previous]").attr('data-slide-state', 'hidden');
      this.slides[this.prev_slide].setAttribute('data-slide-state', 'previous');
      return this.slides[this.current_slide].setAttribute('data-slide-state', 'current');
    };

    return SlideSet;

  })();

}).call(this);
