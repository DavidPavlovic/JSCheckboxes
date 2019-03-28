const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    // Check if they had a shift key down
    // And check that they are checking it
    if(e.shiftKey && lastChecked && this.checked && lastChecked != this) {
        // Do what we please
        checkboxes.forEach(e => {
            console.log(e);
            if(e === this || e === lastChecked ) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween!');
            }

            if(inBetween) {
                e.checked = true;
            }
        });
    }

    lastChecked = this;
    console.log(lastChecked);
}

checkboxes.forEach(e => e.addEventListener('click', handleCheck));