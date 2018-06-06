describe("Agendamento", function () {

    var agenda;
    var lucas;
    beforeEach(function () {
        agenda = new Agendamento();
        lucas = new PacienteBuilder().constroi();
    });

    it("deve agendar para 20 dias depois", function () {

        var consulta = new Consulta(lucas, [], false, false, new Date(2014, 7, 1));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 7, 21).toString());

    });

    it("deve pular fins de semana", function () {

        var consulta = new Consulta(lucas, [], false, false, new Date(2014, 5, 30));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 6, 21).toString());

    });
});