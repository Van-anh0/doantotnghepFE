import actionCVApi from '../../actions/actionCV';

export const handleDeleteCVById = async (id) => {
    try {
      await actionCVApi.deleteCVById(id);
      // Xóa thành công, trả về true hoặc thông báo thành công
      return true;
    } catch (error) {
      console.log(error);
      // Xóa thất bại, trả về false hoặc thông báo lỗi
      return false;
    }
  };
