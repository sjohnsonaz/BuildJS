Build('demo.inheritance.Child', ['demo.inheritance.Parent'], function ($define, $super) {
    $define({
        $extends: 'demo.inheritance.Parent',
        $constructor: function Child() {
            $super(this)();
            this.name = 'Child';
        }
    });
});
