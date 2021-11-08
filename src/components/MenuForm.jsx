import { useHistory } from 'react-router';

const MenuForm = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };
    return (
        <h2 className="text-center">
            <i class="fa fa-plus" aria-hidden="true"></i> | <i class="fa fa-arrow-left" aria-hidden="true" onClick={goBack}></i>
        </h2>
    );
};

export default MenuForm;
