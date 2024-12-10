
class TestLambda {

    title = 'TitreLambda';

    main() {
        function nombrePremier1() {
            console.log('nombrePremier1', this);
        }
        const nombrePremier2 = () => {
            console.log('nombrePremier2', this);
        }

        nombrePremier1();
        nombrePremier2();
    }
}

(new TestLambda()).main();