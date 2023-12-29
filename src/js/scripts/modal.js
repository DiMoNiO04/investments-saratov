function getWidthScrol() {
  const div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  return scrollWidth;
}

class Modal {
  constructor(name) {
    this.name = name;
    this.modal = document.querySelector(`[data-modal="${name}"]`);
    this.triggers = document.querySelectorAll(`[data-modal-el="${name}"]`);
    this.body = document.querySelector('body');
    this.openHendler();
  }

  open() {
    this.modal.classList.remove('success', 'error');
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.style.width = `${document.body.clientWidth - getWidthScrol()}px`;
    this.modal.addEventListener('click', this.closeHendler);
    getWidthScrol();
    this.changeModalContent(this);
  }

  changeModalContent(el) {
    if (el.modal.querySelector('.--main') && el.modal.querySelector('.--success')) {
      const modalBase = el.modal.querySelector('.--main');
      const modalSuccess = el.modal.querySelector('.--success');

      modalBase.style = '';
      modalSuccess.style.display = 'none';
    }
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = 'unset';
    document.body.style.width = 'auto';
    this.modal.removeEventListener('click', this.closeHendler);
  }

  success() {
    this.modal.classList.remove('error');
    this.modal.classList.add('success');
  }

  error() {
    this.modal.classList.remove('success');
    this.modal.classList.add('error');
  }

  update() {
    this.modal = document.querySelector(`[data-modal="${this.name}"]`);
    this.triggers = document.querySelectorAll(`[data-modal-el="${this.name}"]`);
    this.openHendler();
  }

  openHendler = () => {
    this.triggers.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        this.open();
      });
    });
  };

  closeHendler = (event) => {
    if (event.target.classList.contains('close-x')) {
      this.close();
    }
  };
}

const writeRequest = document.querySelector('[data-modal="write-request"]') ? new Modal('write-request') : null;

const requestSent = document.querySelector('[data-modal="request-sent"]') ? new Modal('request-sent') : null;
const yourOfferSent = document.querySelector('[data-modal="your-offer-sent"]') ? new Modal('your-offer-sent') : null;
const exitConfirmation = document.querySelector('[data-modal="exit-confirmation"]')
  ? new Modal('exit-confirmation')
  : null;
const emailConfirmed = document.querySelector('[data-modal="email-confirmed"]') ? new Modal('email-confirmed') : null;
const accountCreateSuccess = document.querySelector('[data-modal="account-create-success"]')
  ? new Modal('account-create-success')
  : null;
const projectPpp = document.querySelector('[data-modal="project-ppp"]') ? new Modal('project-ppp') : null;
const taxBenefitsAgrement = document.querySelector('[data-modal="tax-benefits-agreement"]')
  ? new Modal('tax-benefits-agreement')
  : null;
const taxBenefitsProjects = document.querySelector('[data-modal="tax-benefits-projects"]')
  ? new Modal('tax-benefits-projects')
  : null;
const descInfractureProject = document.querySelector('[data-modal="desc-infracture-project"]')
  ? new Modal('desc-infracture-project')
  : null;
const infractureSubs = document.querySelector('[data-modal="infracture-project-subs"]')
  ? new Modal('infracture-project-subs')
  : null;
const devInnovativeEnterprises = document.querySelector('[data-modal="dev-innovative-enterprises"]')
  ? new Modal('dev-innovative-enterprises')
  : null;
const creatBusinessEnv = document.querySelector('[data-modal="creat-business-env"]')
  ? new Modal('creat-business-env')
  : null;
const agencyExpertNetwork = document.querySelector('[data-modal="agency-expert-network"]')
  ? new Modal('agency-expert-network')
  : null;
const bussinesIncubator = document.querySelector('[data-modal="bussines-incubator"]')
  ? new Modal('bussines-incubator')
  : null;

function renderModalInfrProject() {
  const btnsDescInfractureProject = document.querySelectorAll('[data-modal-el="desc-infracture-project"]');

  if (btnsDescInfractureProject) {
    btnsDescInfractureProject.forEach((btn) => {
      btn.addEventListener('click', function (event) {
        const modal = document.querySelector('[data-modal="desc-infracture-project"]');
        const mainDescCard = event.target.previousElementSibling;

        const titleCard = mainDescCard.querySelector('.card__content-title').textContent;
        const titleModal = modal.querySelector('.modal-bg__title');
        titleModal.textContent = titleCard;

        const blocksCard = mainDescCard.querySelector('.card__content-items').innerHTML;
        const blocksModal = modal.querySelector('.modal-bg__descs');
        blocksModal.innerHTML = blocksCard;
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderModalInfrProject();
});
