describe("Paciente", function() {
    var lucas;
    beforeEach(function (){
        lucas = new PacienteBuilder().constroi();
    });

    it("deve calcular o IMC", function() {
        expect(lucas.imc()).toEqual(72 / (1.82*1.82));
    });

    it("deve calcular batimentos cardiacos", function() {
        expect(lucas.batimentos()).toEqual(1177344000);
    });
});