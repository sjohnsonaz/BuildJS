Build('demo.inheritance.Parent', [], function ($define, $super) {
    $define({
        $constructor: function Parent() {
            this.name = 'Parent';
            this.value = 1;
        }
    });
});
