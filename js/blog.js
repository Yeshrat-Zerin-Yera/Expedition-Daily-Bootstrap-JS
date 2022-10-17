// Show Blog
const showBlog = () => {
    const main = document.getElementById('main');
    main.textContent = '';
    main.innerHTML = `
        <section>
        <div class="card mb-3 border-0 shadow-lg p-4 rounded-4 mb-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="images/image-1.png" class="h-100 w-100 rounded-4" alt="Image of thumbnail">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title text-secondary">Difference between var, let and const in JavaScript
                        </h3>
                        <p class="card-text text-secondary fs-5">There are three keywords in JavaScript that can be
                            used
                            to
                            declare
                            variables: let, var, and const. Each keyword has different rules and implications for
                            how
                            the variables they create can be used.</p>
                        <p class="card-text text-secondary fs-5">1. let: The let keyword declares a block-scoped
                            local
                            variable, optionally
                            initializing it to a value.
                            Block-scoped means that the variable is only available within the block it was declared
                            in,
                            which is usually denoted by curly braces {}.</p>
                        <p class="card-text text-secondary fs-5">2. var: The var keyword declares a function-scoped
                            or
                            global variable,
                            optionally initializing it to a value.
                            Function-scoped means that the variable is only available within the function it was
                            declared in. Global variables are available throughout your entire code.</p>
                        <p class="card-text text-secondary fs-5">3. const: The const keyword declares a
                            block-scoped,
                            immutable constant
                            variable, i.e. a variable that can't be reassigned.
                            Constants are also called “immutable variables”, but that's a bit of a misnomer since
                            they
                            are actually variables - just ones that can't be reassigned.</p>
                        <p class="card-text"><small class="text-muted">Uploaded 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3 border-0 shadow-lg p-4 rounded-4 mb-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="images/image-2.png" class="h-100 w-100 rounded-4" alt="Image of thumbnail">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title text-secondary">The Difference between regular functions and arrow
                            functions</h3>
                        <p class="card-text text-secondary fs-5">In JavaScript, Function can be declared in
                            different
                            ways. The common way is to declare after using function keyword.</p>
                        <p class="card-text text-secondary fs-5">1. Regular functions created using function
                            declarations or expressions are 'constructible' and 'callable'. Since regular functions
                            are
                            constructible, they can be called using the 'new' keyword. However, the arrow functions
                            are
                            only 'callable' and not constructible. Thus, we will get a run-time error on trying to
                            construct a non-constructible arrow functions using the new keyword.</p>
                        <p class="card-text text-secondary fs-5">2. Arrow function — also called fat arrow function—
                            is
                            a new feature introduced in ES6 that is a more concise syntax for writing function
                            expressions. While both regular JavaScript functions and arrow functions work in a
                            similar
                            manner, there are certain differences between them.</p>
                        <p class="card-text"><small class="text-muted">Uploaded 5 days ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3 border-0 shadow-lg p-4 rounded-4 mb-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="images/image-3.jpg" class="h-100 w-100 rounded-4" alt="Image of thumbnail">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title text-secondary">Array methods explained : filter vs map vs find vs
                            foreach</h3>
                        <p class="card-text text-secondary fs-5">Javascript Array inbuilt object provides some
                            really
                            cool and helpful functions to manage our data stored in arrays.</p>
                        <p class="card-text text-secondary fs-5">1. Foreach takes a callback function and run that
                            callback function on each element of array one by one. For every element on the array we
                            are
                            calling a callback which gets element & its index provided by foreach.</p>
                        <p class="card-text text-secondary fs-5">2. Whenever you have to filter an array Javascript
                            inbuilt method to filter your array is the right choice to use. Filter let you provide a
                            callback for every element and returns a filtered array.</p>
                        <p class="card-text text-secondary fs-5">3. One of my favourite and most used array method
                            of
                            all time. As a ReactJS developer I use map a lot inside my application UI.
                            Map like filter & foreach takes a callback and run it against every element on the array
                            but
                            whats makes it unique is it generate a new array based on your existing array.</p>
                        <p class="card-text text-secondary fs-5">4. find() method in Javascript is used to get the
                            value
                            of the first element in the array that satisfies the provided condition. It checks all
                            the
                            elements of the array and whichever first element satisfies the condition is going to
                            print.
                        </p>
                        <p class="card-text"><small class="text-muted">Uploaded 6 days ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3 border-0 shadow-lg p-4 rounded-4 mb-5">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="images/image-4.jpeg" class="h-100 w-100 rounded-4" alt="Image of thumbnail">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title text-secondary">What are template strings used for</h3>
                        <p class="card-text text-secondary fs-5">Template strings are a powerful feature of modern
                            JavaScript released in ES6. It lets us insert/interpolate variables and expressions into
                            strings without needing to concatenate like in older versions of JavaScript. It allows
                            us to
                            create strings that are complex and contain dynamic elements. Another great thing that
                            comes
                            with template strings are tags. Tags are functions that take a string and the decomposed
                            parts of the string as parameters and are great for converting strings to different
                            entities.</p>
                        <p class="card-text"><small class="text-muted">Uploaded 1 week ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
};