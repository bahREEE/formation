package tn.webdev.formation.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long formateurId;

    private String formateurName;

    private String formateurLastname;

    @Email
    private String email;

    private Integer tel;

    @ManyToOne
    @JoinColumn(name="orgId")
    private Organisme org;

    @OneToMany
    

    private String type;
}
