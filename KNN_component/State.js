class State {
    static instance = undefined;
    constructor() {
        if(this.instance) return instance;

        this.instance = this;
        this.current_step = 1;
        
        //step one
        this.problem_title = '';
        this.problem_explanation = '';
        
    }

    setProblem_title(text) {
        this.problem_definition = text;
    }
    
    getProblem_title() {
        return this.problem_definition;
    }
    
}


//데이터 처리를 위한 통합 컨트롤러