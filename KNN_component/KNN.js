function KNN(props) {
    //State class is singleton pattern.
    var state = new State();

    var onNext = (corrent_step) => {

    }

    var onBefore = (corrent_step) => {

    }

    return (
        <div class='KNN'>

            <Step_one state={state} />
            <Step_two state={state} />

        </div>
    );
}

/*
   STEP1: Problem definition.
   STEP2: Data acquisition. ←ㅡㅡㅡ Data trimming.
       STEP2.1: Set the characteristics.  ↑
       STEP2.2: Set the label.            ↑
       STEP2.3: Enter data.               ↑
   STEP3: Visualizing data. ㅡㅡㅡㅡㅡㅡ⤴
   STEP4: Separating data.
   STEP5: Parameter "K" setting. ←ㅡㅡㅡㅡㅡㅡㅡ Reset for optimal parameters.
   STEP6: Comparing predicted and actual values. ㅡㅡㅡ⤴
   STEP7: Test it myself.
   STEP8: Save or share projects.
*/