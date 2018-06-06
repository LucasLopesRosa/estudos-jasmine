describe("Consulta", function() {
    var lucas;

    beforeEach(function() {
        lucas = new PacienteBuilder().constroi();
    });

    describe("Consultas que são retornos", function() {

        it("nao deve cobrar nada se a consulta for um retorno", function() {
            var consulta = new Consulta(lucas, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });

    });

    describe("Consultas que são particulares", function() {

        it("deve dobrar o preco da consulta particular", function() {
            var consulta = new Consulta(lucas, ["proc1", "proc2"], true, false);

            expect(consulta.preco()).toEqual(50 * 2);
        });

        it("deve dobrar o preco da consulta particular mesmo com procedimentos especiais", function() {
            var consulta = new Consulta(lucas, ["raio-x"], true, false);

            expect(consulta.preco()).toEqual(55 * 2);
        });
    });

    describe("Consultas por um convênio", function() {
        it("deve cobrar preco especifico dependendo do procedimento", function() {
            var consulta = new Consulta(lucas, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

});