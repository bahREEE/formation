package tn.webdev.formation.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class SessionFormation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long sessionId;

    @ManyToOne
    @JoinColumn(name="orgId")
    private Organisme organisme;

    private String lieu;

    @ManyToOne
    @JoinColumn(name = "formateurId")
    private Formateur formateur;

    @ManyToOne
    @JoinColumn(name = "formationId")
    private Formation formation;

    @ManyToMany(mappedBy = "sessions")
    private List<Participant> participants;

    private Date dateDebut;

    private Date dateFin;

    private Integer nbParticipants;
}
