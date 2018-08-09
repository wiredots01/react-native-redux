export const selectLibraryId = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId,
  }
}