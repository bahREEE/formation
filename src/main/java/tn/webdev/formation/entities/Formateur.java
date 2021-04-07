package tn.webdev.formation.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Formateur {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long formateurId;

    private String formateurName;

    private String formateurLastname;

    @Email
    private String email;

    private Integer tel;

    @ManyToOne
    @JoinColumn(name="orgId")
    private Organisme org;
    
    private String type;
}
