function Step_one(props) {
    var state = props.state;

    return (
        <div class='Step_one'>
            <div class="border rounded container-lg">

                <h4 class='m-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="m-2 bi bi-check2-square" viewBox="0 0 16 16">
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                    STEP1: Problem definition.
                </h4>

                <div class="m-3">
                    <input type="text" class="form-control" placeholder="Pick a topic." aria-label="Pick a topic." />
                    <textarea class="form-control" placeholder='Please explain this in detail.' aria-label="With textarea"></textarea>
                </div>
                <div class='w-100'>
                    <button class="btn btn-success btn-lg float-right"
                        type="submit">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
}