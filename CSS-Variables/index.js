console.log("CSS Variables Practice")

// QuerySelectorAll return an array of the selected elements and it can be used to target like an nodeList also
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // This will give the values of the changed conditions 
    // console.log(this.value)

    // This will give the subsets of the dataset of the data key attribute
    //  console.log(this.dataset)


    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));







