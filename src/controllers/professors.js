const Professor = require( '../models/professor' )

const getProfessors = async ( req, res ) => {

    const professors = await Professor.find();

    res.json( professors );

};

const createProfessor = async ( req, res ) => {

    const professor = new Professor( req.body );

    await professor.save();
    
    res.json({
        message: 'Professor saved'
    });
};

const updateProfessor = async ( req, res ) => {

    await Professor.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Professor updated'
    });

}

const deleteProfessor = async ( req, res ) => {

    await Professor.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Professor deleted'
    });

}

module.exports = { getProfessors, createProfessor, updateProfessor, deleteProfessor };